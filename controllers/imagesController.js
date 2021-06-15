const axios = require('axios');

exports.getAPODImage = function (req, res, next) {
    // CREATE THE API CALL TO THE NASA MIDDLEWARE APOD
    // Make a request for a user with a given ID
    axios.get('https://api.nasa.gov/planetary/apod?api_key=MGnq13mROoczzza0IxyX3MhxN1BFetcNPbp6upTg')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    res.send('NOT IMPLEMENTED');
};