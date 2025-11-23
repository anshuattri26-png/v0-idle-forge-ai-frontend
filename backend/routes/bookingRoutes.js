const express = require("express")
const router = express.Router()
const Booking = require("../models/Booking")

// Create booking
router.post("/", async (req, res) => {
  // Protected route logic would go here (middleware)
  try {
    const booking = await Booking.create(req.body)
    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
