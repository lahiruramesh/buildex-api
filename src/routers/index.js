const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");
const {timetableRouter} = require("./Timetable");
const {timeslotRouter} = require("./Timeslot");


module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter,
    timetableRouter,
    timeslotRouter,
};
