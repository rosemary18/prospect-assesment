const express = require("express");
const router = express.Router();

// Require Model
const Company = require("../../models/companyModel");
const Office = require("../../models/officeModel");

// Validator
const validateCompanyInput = require("../../validation/formCompanyValidator");

// @Route get all company
router.get("/", (req, res) => {
  Company.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});

// @Route get and populate a company with offices
router.get("/:id", async (req, res) => {
  try {
    const data = await Company.findById(req.params.id)
      .populate({
        path: "offices",
        model: "tbl_office",
      })
      .select();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

// @Route add company
router.post("/add", (req, res) => {
  const { errors, isValid } = validateCompanyInput(req.body);
  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  const { name, address, revenue, phone } = req.body;
  const newCompany = new Company({
    name: name,
    address: address,
    revenue: Math.floor(revenue),
    phone: phone,
  });
  newCompany
    .save()
    .then((result) => {
      res.status(200).json({ msg: "success", data: result });
    })
    .catch((err) => res.status(400).send(err));
});

// @Route update offices field
router.put("/update/:id/:office_id", async (req, res) => {
  // Search the company
  await Company.findById(req.params.id)
    .then((data) => {
      // Add the object id to offices array
      data.offices.unshift(req.params.office_id);
      //Save
      data.save().then((result) => res.status(200).json(result));
    })
    //catching error
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
