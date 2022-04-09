const express = require('express');
const appointmentRouter = express.Router();

const AppointmentController = require('../controllers/AppointmentController');

appointmentRouter.post('/create', AppointmentController.create);
appointmentRouter.get("/getByServiceCenter/:id", AppointmentController.getByServiceCenter);

module.exports = {
    appointmentRouter
}