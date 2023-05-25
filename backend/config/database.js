import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Підключення до MongoDB виконано успішно.");
    })
    .catch((error) => {
      console.log("Помилка підключення: " + error.message);
    });
};

const getAllDatabaseNames = async (req, res) => {
  try {
    const adminDb = mongoose.connection.db.admin();
    const databases = await adminDb.listDatabases();
    const databaseNames = databases.databases.map((database) => database.name);

    return res.status(200).send({
      status: "success",
      databases: databaseNames,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

const getAllCollectionNames = async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);

    return res.status(200).send({
      status: "success",
      collections: collectionNames,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

export { connect, getAllDatabaseNames, getAllCollectionNames };
