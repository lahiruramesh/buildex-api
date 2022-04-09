const express = require('express');
const appointmentStatusRouter = express.Router();

const appointmentStatusController = require('../controllers/AppointmentStatusController');

appointmentStatusRouter.post('/create', appointmentStatusController.create);

module.exports = {
    appointmentStatusRouter
}