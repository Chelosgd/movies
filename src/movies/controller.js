const Movie = require("./model");

class MoviesController {

    listMovies(req, res) {
        Movie.find().then(data => {
            res.send(data);
        }).catch(error => {
            res.sendStatus(500);
            console.log('Error:', error);
        })
    }

    createMovie(req, res) {
        Movie.create(req.body).then( data => {
            res.send("Movie created");
        }).catch( error=> {
            console.log("Error:", error);
        })

    }

}

module.exports = new MoviesController();