// DEPENDENCIES
var path = require("path");
var express = require("express");
// ===========================================
// ROUTING
// ===========================================
module.exports = function(app) {


    app.get("/survey", function(res, req) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    }) 

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}
