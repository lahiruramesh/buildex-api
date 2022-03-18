const express = require('express');
const vehicleRouter = express.Router();

const vehicleController = require('../controllers/VehicleController');

vehicleRouter.post('/create', vehicleController.create);

module.exports = {
  vehicleRouter
}