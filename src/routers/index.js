const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");

module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter
};
