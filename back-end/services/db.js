const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
};
