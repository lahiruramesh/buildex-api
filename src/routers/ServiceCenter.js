const express = require('express');
const serviceCenterRouter = express.Router();

const serviceCenterController = require('../controllers/ServiceCenterController');

serviceCenterRouter.post('/create', serviceCenterController.create);
//vehicleImageRouter.get("/:id", vehicleImageController.findOne);

module.exports = {
    serviceCenterRouter
}