const express = require('express');
const timeslotRouter = express.Router();

const timeslotController = require('../controllers/TimeslotController');

timeslotRouter.post('/create', timeslotController.create);
timeslotRouter.get("/:id", timeslotController.findOne);
timeslotRouter.put("/:id", timeslotController.update);

module.exports = {
  timeslotRouter
}