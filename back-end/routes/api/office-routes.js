const express = require("express");
const router = express.Router();

// Require Models
const Office = require("../../models/officeModel");
const Company = require("../../models/companyModel");

// Require Validator
const validateOfficeInput = require("../../validation/formOfficeValidator");

router.get("/test", (req, res) => {
  res.send({ msg: "success" });
});

// @Router get offices
router.get("/", (req, res) => {
  Office.find()
    .then((office) => res.status(200).json(office))
    .catch((err) => res.status(400).json(err));
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
    .then((data) => {
      Company.findById(company)
        .then((cmp) => {
          // add office to company office list
          cmp.offices.unshift(data._id);
          cmp
            .save()
            .then(() => {
              res.status(200).json({ msg: "success" });
            })
            .catch((err) => res.status(400).send(err));
        })
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(400).send(err));
});

// @Routes delete office
router.delete("/delete/:cmp_id/:office_id", (req, res) => {
  Office.findById(req.params.office_id)
    .then((office) => {
      office
        .remove()
        .then(() => {
          Company.findById(req.params.cmp_id).then((cmp) => {
            const removeIndex = cmp.offices
              .map((item) => item.toString())
              .indexOf(req.params.office_id);
            //Splice out of array
            cmp.offices.splice(removeIndex, 1);
            cmp
              .save()
              .then((result) => res.status(200).json({ msg: "success" }))
              .catch((err) => res.status(400).json(err));
          });
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
