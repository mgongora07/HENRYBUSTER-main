const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const getMovies = require("../controllers/getMovies");
const getFormat = require("../controllers/getFotmat");
const getGenre = require("../controllers/getGenres");
const getLanguage = require("../controllers/getLanguage");
const insertGenre = require("../controllers/insertGenre");
const insertLanguage = require("../controllers/insertLanguage");
const insertFormat = require("../controllers/insertFormat");
const insertUser = require("../controllers/insertUser");
const insertMovie = require("../controllers/insertMovie");
const updateMovie = require("../controllers/UpdateMovie");
const getMovieById = require("../controllers/getMovieById");
const updateUser = require("../controllers/updateUser");
const getUsers = require("../controllers/getUsers");
const getUserById = require("../controllers/getUserById");
const getRatingsByMovieId = require("../controllers/getRatingsByMovieId");
const InsertRating = require("../controllers/InsertRating");
const getMoviesForAdmin = require("../controllers/getMoviesForAdmin");
const searchMovieByName = require("../controllers/searchMovieByName");

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/movie/:id",getMovieById)
router.get("/user/:id",getUserById)
router.get("/movies", getMovies);
router.get("/movies/admin", getMoviesForAdmin);
router.get("/users", getUsers);
router.get("/formats", getFormat);
router.get("/genres", getGenre);
router.get("/languages", getLanguage);
router.get("/rating/:id", getRatingsByMovieId)
router.get("/movies/search", searchMovieByName)
router.post("/genre",insertGenre)
router.post("/language",insertLanguage)
router.post("/format", insertFormat)
router.post("/user", insertUser)
router.post("/movie", insertMovie)
router.post("/rating", InsertRating)
router.put("/movie/:id", updateMovie)
router.put("/user/:id", updateUser)
module.exports = router;
