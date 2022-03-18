const express = require('express');
const timetableRouter = express.Router();

const timetableController = require('../controllers/TimetableController');

timetableRouter.post('/create', timetableController.create);
timetableRouter.get("/:id", timetableController.findOne);
timetableRouter.put("/:id", timetableController.update);

module.exports = {
  timetableRouter
}