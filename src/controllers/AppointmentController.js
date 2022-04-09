const AppointmentModel = require("../models").AppointmentModel;

exports.create = (req, res) => {

    console.log(req.body);

    // Validate request
//   if (!req.body.startTime) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }
  // Create a appointment
  const Appointment = new AppointmentModel(req.body);

  // Save appointment in the database
  Appointment
    .save(Appointment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the appointment."
      });
    });
  
};
