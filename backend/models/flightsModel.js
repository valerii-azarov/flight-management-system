import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Необхідно вказати назву рейсу."],
      trim: true,
    },
    townFrom: {
      type: String,
      required: [true, "Необхідно вказати місто відправлення."],
      trim: true,
    },
    townTo: {
      type: String,
      required: [true, "Необхідно вказати місто прибуття."],
      trim: true,
    },
    dateOut: {
      type: Date,
      required: [true, "Необхідно вказати дату відправлення."],
    },
    dateIn: {
      type: Date,
      required: [true, "Необхідно вказати дату прибуття."],
      validate: {
        validator: function (value) {
          return value > this.dateOut; // Перевірка, що дата прибуття більша за дату відправлення.
        },
        message: "Дата прибуття повинна бути пізнішою за дату відправлення.",
      },
    },
    airline: {
      type: String,
      required: [true, "Необхідно вказати назву авіалінії."],
      trim: true,
    },
    count: {
      type: Number,
      default: 0,
      min: [0, "Кількість не може бути від'ємною."], // Перевірка, що кількість пасажирів не є від'ємною.
    },
    price: {
      type: Number,
      default: 0,
      min: [0, "Ціна не може бути від'ємною."], // Перевірка, що ціна не є від'ємною.
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Flights", flightSchema);
