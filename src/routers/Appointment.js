const express = require('express');
const appointmentRouter = express.Router();

const AppointmentController = require('../controllers/AppointmentController');

appointmentRouter.post('/create', AppointmentController.create);
//vehicleImageRouter.get("/:id", vehicleImageController.findOne);

module.exports = {
    appointmentRouter
}