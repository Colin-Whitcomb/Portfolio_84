var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
// var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.

// Loads the Home page
router.get("/", function (req, res) {
        
        res.sendFile("../public/html/index.html");
    });

    router.get("/home", function (req, res) {
        
        res.render("home");
    });

module.exports = router;