const mongoose = require("mongoose");

const parkingLotSchema = new mongoose.Schema(
  {
    lotName: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    vType: [
      {
        category: { type: String, required: true },
        totalSlots: { type: Number, required: true },
        occupiedSlots: { type: Number, default: 0, required: true },
        perHourRate: { type: Number, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ParkingLot = mongoose.model("parkingLot", parkingLotSchema);

module.exports = ParkingLot;
