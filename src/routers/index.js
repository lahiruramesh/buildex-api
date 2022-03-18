const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");
const {vehicleServiceRouter} = require("./VehicleService");

module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter,
    vehicleServiceRouter
};
