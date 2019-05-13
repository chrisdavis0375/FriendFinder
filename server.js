// DEPENDENCIES
// ================================================================================================================
var express = require("express");
var path = require("path")
var app = express();

// Allows express to parse data
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTES
// ===============================================================================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });