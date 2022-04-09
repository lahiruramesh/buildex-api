const express = require('express');
const vehicleRouter = express.Router();

const vehicleController = require('../controllers/VehicleController');

vehicleRouter.post('/create', vehicleController.create);
vehicleRouter.get("/:id", vehicleController.findOne);
vehicleRouter.put("/:id", vehicleController.update);
vehicleRouter.get("/", vehicleController.loadAllVehicle);

module.exports = {
  vehicleRouter
}