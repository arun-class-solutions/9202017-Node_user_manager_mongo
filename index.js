const express = require("express");
const app = express();

// Set up body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Insert routing into application middleware
app.use(require("./resources"));

app.listen(3000);

// Export Express application
module.exports = app;
