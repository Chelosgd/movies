const router = require("express").Router() //create a router 
const middleware = require("../src/middleware/auth")
const moviesControl = require("../src/movies/controller")

router.use("/movies", middleware)

router.get("/movies", moviesControl.listMovies )
router.post("/movies", moviesControl.createMovie )










module.exports = router
