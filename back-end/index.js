const express = require("express");
const app = express();

// Required service

// Server service port with giving app func()
require("./services/port")(app);

// Parser service with giving app func()
require("./services/parser")(app);

// Database connection service with giving blanc func()
require("./services/db")();

// Routes service with giving app func()
require("./services/routes")(app);
