import express from "express";
import {
  getAllFlights,
  getFlightById,
  addFlights,
  updateFlight,
  deleteFlights,
} from "../controllers/flightsController.js";

const router = express.Router();

router.get("/flights", getAllFlights);
router.get("/flights/:id", getFlightById);
router.post("/flights", addFlights);
router.patch("/flights/:id", updateFlight);
router.delete("/flights", deleteFlights);

export default router;
