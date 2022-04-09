const AppointmentStatusModel = require("../models").AppointmentStatusModel;

exports.create = (req, res) => {

  // Create a Appointment Status
  const appointmentStatus = new AppointmentStatusModel(req.body);
  // Save Tutorial in the database
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