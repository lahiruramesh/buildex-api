const AppointmentStatusModel = require("../models").AppointmentStatusModel;

exports.create = (req, res) => {

  // Create an Appointment Status
  const appointmentStatus = new AppointmentStatusModel(req.body);
  // Save appointment status in the database
  appointmentStatus
    .save(appointmentStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appointment status."
      });
    });
  
};