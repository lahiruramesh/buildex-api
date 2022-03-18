const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");
const {timetableRouter} = require("./Timetable");


module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter,
    timetableRouter,

};
