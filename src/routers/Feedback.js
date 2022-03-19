const express = require('express');
const feedbackRouter = express.Router();

const feedbackController = require('../controllers/FeedbackController');

feedbackRouter.post('/create', feedbackController.create);
//vehicleImageRouter.get("/:id", vehicleImageController.findOne);

module.exports = {
    feedbackRouter
}