const axios = require('axios');
var dotenv = require('dotenv');
dotenv.config();

exports.getAPODImage = function (req, res, next) {
    // CREATE THE API CALL TO THE NASA MIDDLEWARE APOD
    // Make a request for a user with a given ID
    axios.get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_API_KEY)
        .then(function (response) {
            // PARSE RESPONSE AND RETRIEVE THE IMAGE
            res.send(response.data.hdurl);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
};