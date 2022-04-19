const { default: mongoose } = require("mongoose");

const ServiceCenterModel = require("../models").ServiceCenterModel;
const appointmentModel = require("../models").AppointmentModel;
const timeslotModel = require("../models").TimeslotModel;
const timetableModel = require("../models").TimetableModel;

exports.create = (req, res) => {

    console.log(req.body);

    // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.address) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const ServiceCenter = new ServiceCenterModel(req.body);
  // Save Tutorial in the database
  ServiceCenter
    .save(ServiceCenter)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  
};

exports.update = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
      if (!req.body.address) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

    const id = req.params.id;
    VehicleModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

exports.get= (req, res) => {
    ServiceCenterModel.find()
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot get Tutorial . Maybe Tutorial was not found!`
          });
        } else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error getting Tutorial"
        });
      });
};

exports.getByOwner = (req, res) => {

  const id = req.params.id;

  ServiceCenterModel.find({"owner" : id})
  .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot get Tutorial . Maybe Tutorial was not found!`
        });
      } else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getting Tutorial"
      });
    });
};

exports.findByServiceCenterId = (req, res) => {
  const id = req.params.id;
  ServiceCenterModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found service center with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving service center with id=" + id });
    });
};

exports.getTimeslotsByServiceId = async (req, res) => {

  var appointments;
  var unAvailableTimeslots = [];
  var availableTimeslots = [];
  var allTimeslots = [];
  
  var responses = [];

  var d = new Date(req.body.requestDate);
  var n = d.getDay();
  var day;

  switch (n) {
    case 1:
      day = "Monday";
      break;
    case 2: 
      day = "Tuesday";
      break;
    case 3: 
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Sunday";

  }

  await timetableModel.find({"day" : day})
  .then(async timetableData => {

    if(timetableData) {

      await timeslotModel.find({"timetable" : timetableData})
      .then(alltt => {

        if(alltt) {
          allTimeslots = alltt;
        }

      })
      .catch(err => {
        console.log(err);
      });

    }

  })
  .catch(err => {
    console.log(err);
  });

  // get appointments according to service center and request date
  await appointmentModel.find(
    {
      $and: [
        {serviceCenter: req.body.id},
        {requestDate: req.body.requestDate}
      ]
    }
    )
  .then(async appointmentData => {

    console.log(appointmentData);

    if (!appointmentData) {

      res.status(404).send({

        message: `Cannot get Appointments`
      });

    } else {

      for(i=0; i < appointmentData.length; i++) {

        await timeslotModel.findById(appointmentData[i].timeslot)
        .then( timeslotData => {

          console.log(timeslotData);

          if(timeslotData) {

            unAvailableTimeslots.push(timeslotData);

          }

        })
        .catch(err => {
          console.log(err);
        });

      }

      if(allTimeslots.length > 0) {

        for(i=0; i < allTimeslots.length; i++) {

          for(j=0; j < unAvailableTimeslots.length; j++) {

            if(allTimeslots[i] == unAvailableTimeslots[j]) {
              delete allTimeslots[i];
            }

          }

        }

        console.log("availables");
        console.log(allTimeslots);

      }

      for(k=0; k < allTimeslots.length; k++) {

        var response = {
          "startTime" : allTimeslots[k].startTime,
          "endTime" : allTimeslots[k].endTime,
          "availability" : true
        }

        responses.push(response);

      }
      
      for(n=0; n < unAvailableTimeslots.length; n++) {

        var response = {
          "startTime" : unAvailableTimeslots[n].startTime,
          "endTime" : unAvailableTimeslots[n].endTime,
          "availability" : false
        }

        responses.push(response);

      }

      if(responses.length > 0) {

        res.send(responses);

      }

      

    }

  })
  .catch(err => {
    res.status(500).send({
      message: "Error getting Tutorial"
    });
  });

};
