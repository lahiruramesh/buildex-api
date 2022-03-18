const express = require('express');
const vehicleImageRouter = express.Router();

const vehicleImageController = require('../controllers/VehicleImageController');

vehicleImageRouter.post('/create', vehicleImageController.create);

module.exports = {
  vehicleImageRouter
}