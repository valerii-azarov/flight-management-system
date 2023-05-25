import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {
  connect,
  getAllDatabaseNames,
  getAllCollectionNames,
} from "./config/database.js";
import flightsRouter from "./routes/flightsRouter.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

connect();

app.use("/api", flightsRouter);
app.use("/api/databases", getAllDatabaseNames);
app.use("/api/collections", getAllCollectionNames);

app.listen(5000, () => {
  console.log("Сервер працює на порту 5000...");
});
