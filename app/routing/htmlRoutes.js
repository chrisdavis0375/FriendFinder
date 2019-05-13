// DEPENDENCIES
var path = require("path");
// ===========================================
// ROUTING
// ===========================================
module.exports = function(app) {


    app.get("/survey", function(res, req) {
        console.log(res);
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    }) 

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}
