const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  type: { type: String, enum: ["Podcast", "Video", "Music", "Tech", "Lifestyle"], required: true },
  features: [{ type: String }],
  equipment: [{ type: String }], // Locked in cabinet
  images: [{ type: String }],
  smartLockId: { type: String }, // ID for the IoT lock
  instantUnlock: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Room", roomSchema)
