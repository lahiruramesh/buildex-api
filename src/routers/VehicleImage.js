const express = require('express');
const vehicleImageRouter = express.Router();

const vehicleImageController = require('../controllers/VehicleImageController');

vehicleImageRouter.post('/create', vehicleImageController.create);
vehicleImageRouter.get("/:id", vehicleImageController.findOne);

module.exports = {
  vehicleImageRouter
}