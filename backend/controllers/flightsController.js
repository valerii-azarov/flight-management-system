import Flights from "../models/flightsModel.js";
import Filters from "../utils/filters.js";

const getAllFlights = async (req, res) => {
  try {
    const countPages = Math.ceil(Flights.countDocuments() / req.query.limit);
    const filteredFlights = await Filters(Flights.find(), req.query);

    return res.status(200).send({
      status: "success",
      countPages: countPages,
      result: filteredFlights.length,
      flights: filteredFlights,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

const getFlightById = async (req, res) => {
  try {
    const flight = await Flights.findById(req.params.id);

    if (!flight) {
      return res.status(404).send({
        status: "error",
        message: "Рейс не знайдено.",
      });
    }

    return res.status(200).send({
      status: "success",
      flight: flight,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

const addFlights = async (req, res) => {
  try {
    await Flights.insertMany(req.body);

    return res.status(201).send({
      status: "success",
      message: "Створено успішно!",
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

const updateFlight = async (req, res) => {
  try {
    const flight = await Flights.findOneAndUpdate({_id: req.params.id }, req.body);

    if (!flight) {
      return res.status(404).send({
        status: "error",
        message: "Рейс не знайдено.",
      });
    }

    return res.status(201).send({
      status: "success",
      message: "Оновлено успішно!",
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

const deleteFlights = async (req, res) => {
  try {
    await Flights.deleteMany({ _id: { $in: req.body } });

    return res.status(200).send({
      status: "success",
      message: "Успішно видалено!",
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Помилка серверу.",
    });
  }
};

export {
  getAllFlights,
  getFlightById,
  addFlights,
  updateFlight,
  deleteFlights,
};
