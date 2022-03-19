const mongoose = require('mongoose');

const {UserSchema} = require('./User');
const {RoleSchema} = require('./Role');
const {VehicleSchema} = require('./Vehicle');
const {VehicleImageSchema} = require("./vehicleImage");
<<<<<<< HEAD
const {VehicleServiceSchema} = require("./VehicleService");
const {FeedbackSchema} = require("./Feedback");
=======
const {TimetableSchema} = require('./Timetable');

>>>>>>> 390a26f9039f5d42e98e97971d2776a01442cffc

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
<<<<<<< HEAD
 VehicleServiceModel : VehicleServiceSchema,
 FeedbackModel : FeedbackSchema,
=======
 TimetableModel : TimetableSchema,

>>>>>>> 390a26f9039f5d42e98e97971d2776a01442cffc
}