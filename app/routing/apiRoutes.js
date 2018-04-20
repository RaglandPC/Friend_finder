//route for survay anwsers https://localhost:8080/api/survey 
// this will take my anwsers and compare them with my friends obj, and matches them with someone,
// after compare will send user the best match from users anwers.
//var an = require('../public/survey')


// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js')

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
		res.json(friends);
	});


    // app.post("/api/survey", function(req, res) {
    //     console.log(req.body);
    //     res.json('hello world');


        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        /*var newcharacter = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newcharacter);
    
        characters.push(newcharacter);
    
        res.json(newcharacter);*/
//     });
// }

//
// route for data (friends) obj
