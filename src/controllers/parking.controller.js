const express = require("express");
const router = express.Router();

const ParkingLot = require("../models/parking.model");

const crudController = require("./crud.controller");

router.get("/", crudController.getAll(ParkingLot));
router.post("/", crudController.post(ParkingLot));
router.get("/:id", crudController.getOne(ParkingLot));
router.patch("/:id", crudController.updateOne(ParkingLot));
router.delete("/:id", crudController.deleteOne(ParkingLot));

module.exports = router;
