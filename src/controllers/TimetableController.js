const TimetableModel = require("../models").TimetableModel;

exports.create = (req, res) => {

    console.log(req.body);

    // Validate request
  // if (!req.body.registrationNumber) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }
  // Create a timetable
  const timetable = new TimetableModel(req.body);
  // Save timetable in the database
  timetable
    .save(timetable)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the timetable."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  TimetableModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Vehicle with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Vehicle with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  TimetableModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};