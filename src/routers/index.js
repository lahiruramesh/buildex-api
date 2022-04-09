const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");
const {vehicleServiceRouter} = require("./VehicleService");
const {feedbackRouter} = require("./Feedback");
const {timetableRouter} = require("./Timetable");
const {serviceCenterRouter} = require("./ServiceCenter");
const {serviceCenterImageRouter} = require("./ServiceCenterImage");
const {timeslotRouter} = require("./Timeslot");

const {appointmentRouter} = require("./Appointment");

const {appointmentStatusRouter} = require("./AppointmentStatus");



module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter,
    vehicleServiceRouter,
    feedbackRouter,
    timetableRouter,
    serviceCenterRouter,
    timeslotRouter,
    serviceCenterImageRouter,
    serviceCenterRouter,

    appointmentRouter,

    appointmentStatusRouter


};
