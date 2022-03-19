const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");
const {vehicleServiceRouter} = require("./VehicleService");
const {feedbackRouter} = require("./Feedback");

module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter,
    vehicleServiceRouter,
    feedbackRouter
};
