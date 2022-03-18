const mongoose = require('mongoose');

const {UserSchema} = require('./User');
const {RoleSchema} = require('./Role');
const {VehicleSchema} = require('./Vehicle');
const {VehicleImageSchema} = require("./vehicleImage");

mongoose.connect('mongodb://localhost:27017/buildex').then( (res) => {
 console.log('DB Connected');
} ).catch((e) => {
 console.log('DB not connected:', e);
});


module.exports = {
 UserModel : UserSchema,
 RoleModel : RoleSchema,
 VehicleModel : VehicleSchema,
 vehicleImageModel : VehicleImageSchema
}