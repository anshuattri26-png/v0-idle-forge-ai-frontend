const express = require("express")
const router = express.Router()
const Room = require("../models/Room")

// Get all rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find({})
    res.json(rooms)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get single room
router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate("owner", "name")
    if (room) res.json(room)
    else res.status(404).json({ message: "Room not found" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
