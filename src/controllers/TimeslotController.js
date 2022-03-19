const TimeslotModel = require("../models").TimeslotModel;

exports.create = (req, res) => {

    console.log(req.body);

    // Validate request
  // if (!req.body.registrationNumber) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }
  // Create a timeslot
  const timeslot = new TimeslotModel(req.body);

  // Save timeslot in the database
  timeslot
    .save(timeslot)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the time slot."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  TimeslotModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Time slot Not found with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving time slot with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  TimeslotModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update time slot with id=${id}. Maybe Time slot was not found!`
        });
      } else res.send({ message: "Time slot was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating time slot with id=" + id
      });
    });
};