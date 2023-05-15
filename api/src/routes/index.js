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

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/movie/:id",getMovieById)
router.get("/movies", getMovies);
router.get("/formats", getFormat);
router.get("/genres", getGenre);
router.get("/languages", getLanguage);
router.post("/genre",insertGenre)
router.post("/language",insertLanguage)
router.post("/format", insertFormat)
router.post("/user", insertUser)
router.post("/movie", insertMovie)
router.put("/movie/:id", updateMovie)
router.put("/user/:id", updateUser)
module.exports = router;
