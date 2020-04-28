const express = require("express");
const router = express.Router();

// Require Models
const Office = require("../../models/officeModel");

// Require Validator
const validateOfficeInput = require("../../validation/formOfficeValidator");

router.get("/test", (req, res) => {
  res.send({ msg: "success" });
});

// @Router add office
router.post("/add", async (req, res) => {
  // validate data from user
  const { errors, isValid } = validateOfficeInput(req.body);
  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }
  const { name, latitude, longitude, office_start_date, company } = req.body;
  // Set new office data from user that will post to database
  const newOffice = new Office({
    name: name,
    location: {
      latitude: latitude,
      longitude: longitude,
    },
    office_start_date: office_start_date,
    company: company,
  });
  // Save
  newOffice
    .save()
    .then((data) => res.status(200).json({ msg: "success", data: data }))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
