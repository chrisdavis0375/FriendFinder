// DEPENDANCIES
var friends = require("../data/friends.js");

// ROUTES
module.exports = function(app) {

    // API for friends json data
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })


    // API for posting json data
    app.post("/api/friends", function(req, res) {
        var match = {
            name: "",
            photo: "",
            friendDifference: 1000
        };


        var Data = req.body;
        var Scores = Data.scores;

        var name = Data.name;
        var photo = Data.photo;

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            //totalDifference = 0;
            console.log(friends[i].name);


            
        }
    })

}