const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  office_start_date: {
    type: Date,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "tbl_companies",
  },
});

module.exports = Office = mongoose.model("tbl_offices", schema);
