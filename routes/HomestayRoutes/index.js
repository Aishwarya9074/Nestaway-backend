import express from "express";
import HomeStay from "../../db/models/HomestaySchema.js"

const router = express.Router();

router.post("/", async (req, res) => {
  const body = [...req.body];
  const homestay = await HomeStay.create(body);
  res.status(201).json({ message: "homestay added" });
});
router.get("/", async (req, res) => {
  const home = await HomeStay.find();
  res.status(200).json(home);
});

export default router;
