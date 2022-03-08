const express = require("express");

//controllers
const parkingController = require("./controllers/parking.controller");

const app = express();
app.use(express.json());

//routes
app.use("/parking" , parkingController)

module.exports = app;
