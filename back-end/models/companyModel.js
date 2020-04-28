const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  offices: [
    {
      type: Schema.Types.ObjectId,
      ref: "tbl_offices",
    },
  ],
});

module.exports = Company = mongoose.model("tbl_companies", schema);
