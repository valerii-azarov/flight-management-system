import axios from "axios";

export const FETCH_FLIGHTS_SUCCESS = "FETCH_FLIGHTS_SUCCESS";
export const FETCH_FLIGHT_SUCCESS = "FETCH_FLIGHT_SUCCESS";
export const CREATE_FLIGHT_SUCCESS = "CREATE_FLIGHT_SUCCESS";
export const UPDATE_FLIGHT_SUCCESS = "UPDATE_FLIGHT_SUCCESS";
export const DELETE_FLIGHTS_SUCCESS = "DELETE_FLIGHTS_SUCCESS";
export const FETCH_DATABASES_SUCCESS = "FETCH_DATABASES_SUCCESS";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";

export const fetchFlightsSuccess = (flights) => ({
  type: FETCH_FLIGHTS_SUCCESS,
  payload: flights,
});

export const fetchFlightSuccess = (flight) => ({
  type: FETCH_FLIGHT_SUCCESS,
  payload: flight,
});

export const createFlightSuccess = (flight) => ({
  type: CREATE_FLIGHT_SUCCESS,
  payload: flight,
});

export const updateFlightSuccess = (flight) => ({
  type: UPDATE_FLIGHT_SUCCESS,
  payload: flight,
});

export const deleteFlightsSuccess = (flightId) => ({
  type: DELETE_FLIGHTS_SUCCESS,
  payload: flightId,
});

export const fetchDatabasesSuccess = (databases) => ({
  type: FETCH_DATABASES_SUCCESS,
  payload: databases,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchFlights = (page, limit, searchQuery) => {
  return async (dispatch) => {
    try {
      let url = `http://localhost:5000/api/flights?page=${page}&limit=${limit}`;
      if (searchQuery) {
        url += `&name[regex]=${searchQuery}`;
      }
      const response = await axios.get(url);
      dispatch(fetchFlightsSuccess(response.data.flights));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchFlight = (flightId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/flights/${flightId}`);
      dispatch(fetchFlightSuccess(response.data.flight));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addFlight = (flightData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/flights", flightData);
      dispatch(createFlightSuccess(response.data.flight));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateFlight = (flightId, flightData) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/flights/${flightId}`, flightData);
      dispatch(updateFlightSuccess(response.data.flight));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteFlights = (flightIds) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:5000/api/flights", {
        data: flightIds,
      });
      dispatch(deleteFlightsSuccess(flightIds));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchDatabases = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/databases");
      dispatch(fetchDatabasesSuccess(response.data.databases));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchCollections = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/collections");
      dispatch(fetchCollectionsSuccess(response.data.collections));
    } catch (error) {
      console.error(error);
    }
  };
};
