import { Schema, model } from "mongoose";

const BookingSchema = {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  homestay: {
    type: Schema.Types.ObjectId,
    ref: "HomeStay",
  },
  checkIn: {
    type: Number,
    required: true,
  },
  checkOut: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "cancelled"],
    default: "pending",
  },
};
const Booking = model("Booking", BookingSchema);
export default Booking;
