const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const FeedbackSchema = mongoose.model(
    "feedback", 
    new Schema({
        rate: String,
        description: String
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    FeedbackSchema
};