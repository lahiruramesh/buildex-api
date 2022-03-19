const {authRouter} = require('./auth');
const {vehicleRouter} = require("./Vehicle");
const {vehicleImageRouter} = require("./VehicleImage");
<<<<<<< HEAD
const {vehicleServiceRouter} = require("./VehicleService");
const {feedbackRouter} = require("./Feedback");
=======
const {timetableRouter} = require("./Timetable");

>>>>>>> 390a26f9039f5d42e98e97971d2776a01442cffc

module.exports = {
    authRouter,
    vehicleRouter,
    vehicleImageRouter,
<<<<<<< HEAD
    vehicleServiceRouter,
    feedbackRouter
=======
    timetableRouter,

>>>>>>> 390a26f9039f5d42e98e97971d2776a01442cffc
};
