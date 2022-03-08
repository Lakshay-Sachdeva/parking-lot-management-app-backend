const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    registrationNumber: { type: String, required: true },
    inTime: { type: String, required: true },
    outTime: null,
    amountPaid: null,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = Vehicle;
