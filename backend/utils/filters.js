const filters = (data, query) => {
  const { page, limit, sort, ...filterParams } = query;

  let queryString = JSON.stringify(filterParams);
  queryString = queryString.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => "$" + match);

  let queryObject = data.find(JSON.parse(queryString));

  if (sort) {
    const sortBy = sort.split(",").join(" ");
    queryObject = queryObject.sort(sortBy);
  }

  if (page && limit) {
    const startIndex = (page - 1) * limit;
    queryObject = queryObject.skip(startIndex).limit(limit);
  }

  return queryObject;
};

export default filters;
