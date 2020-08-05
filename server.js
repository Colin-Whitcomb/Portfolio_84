

var express = require("express");
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.use(express.static(__dirname + '/public'))
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// var apiRoutes = require("./routes/apiRoutes")
// console.log(apiRoutes); //=> [Function]
// apiRoutes(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});