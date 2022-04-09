const mongoose = require('mongoose');

const {UserSchema} = require('./User');
const {RoleSchema} = require('./Role');
const {VehicleSchema} = require('./Vehicle');
const {VehicleImageSchema} = require("./vehicleImage");
const {VehicleServiceSchema} = require("./VehicleService");
const {FeedbackSchema} = require("./Feedback");
const {TimetableSchema} = require('./Timetable');
const {TimeslotSchema} = require('./Timeslot');

const {AppointmentStatusSchema} = require("./AppointmentStatus");

const {ServiceCenterSchema} = require('./ServiceCenter');
const {ServiceCenterImageSchema} = require('./ServiceCenterImage');
const {AppointmentSchema} = require('./Appointment');

const db = {};

db.ROLES = ["user", "admin", "moderator"];


mongoose.connect('mongodb://localhost:27017/buildex').then( (res) => {
 console.log('DB Connected');
} ).catch((e) => {
 console.log('DB not connected:', e);
});


module.exports = {
 UserModel : UserSchema,
 RoleModel : RoleSchema,
 VehicleModel : VehicleSchema,
 vehicleImageModel : VehicleImageSchema,
 VehicleServiceModel : VehicleServiceSchema,
 FeedbackModel : FeedbackSchema,
 TimetableModel : TimetableSchema,
 TimeslotModel : TimeslotSchema,
 db: db,
 ServiceCenterModel : ServiceCenterSchema,
 ServiceCenterImageModel :ServiceCenterImageSchema,

 AppointmentModel :AppointmentSchema,

 AppointmentStatusModel : AppointmentStatusSchema

}