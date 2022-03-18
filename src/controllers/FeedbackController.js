const FeedbackModel = require("../models").FeedbackModel;

exports.create = (req, res) => {

    // Validate request
  if (!req.body.rate) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const feedback = new FeedbackModel(req.body);
  // Save Tutorial in the database
  feedback
    .save(feedback)
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

// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   VehicleModel.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Vehicle with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Vehicle with id=" + id });
//     });
// };