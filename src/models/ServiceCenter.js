const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const ServiceCenterSchema = mongoose.model(
    "serviceCenter", 
    new Schema({
        name: String,
        address: String,
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        availableTimeslots : [{
            type: Schema.Types.ObjectId,
            ref: "timeslot"
        }]
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    ServiceCenterSchema
};