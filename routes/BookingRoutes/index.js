import express from "express";
import Booking from "../../db/models/BookingSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };

  const booking = await Booking.create(body);
  res.status(201).json({ message: "Booking added successfully" });
});
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.status(200).json(bookings);
});
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const booking=await Booking.findById(id)
    res.status(201).json(booking)
})
export default router;
