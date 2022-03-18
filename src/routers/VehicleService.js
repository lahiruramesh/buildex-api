const express = require('express');
const vehicleServiceRouter = express.Router();

const vehicleServiceController = require('../controllers/VehicleServiceController');

vehicleServiceRouter.post('/create', vehicleServiceController.create);
//vehicleImageRouter.get("/:id", vehicleImageController.findOne);

module.exports = {
    vehicleServiceRouter
}