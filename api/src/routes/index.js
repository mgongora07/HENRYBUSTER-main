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
const searchMovieForGuest = require("../controllers/SearchMovieForGuest");
const updateGenre = require("../controllers/updateGenre");
const deleteMovie = require("../controllers/deleteMovie");

const order = require("../controllers/order")

const InsertPurchase = require("../controllers/InsertPurchase");
const insertGuestPurchase = require("../controllers/insertGuestPurchase");
const getGenreById = require("../controllers/getGenreById");
const getAddressByUserId = require("../controllers/getAddressByUserId");
const InsertAddressByUserId = require("../controllers/InsertAddressByUserId.js");
const getAddressById = require("../controllers/getAddressById");
const deleteUser = require("../controllers/deleteUser");
const getPurchases = require("../controllers/getPurchases");
const updatePuchaseById = require("../controllers/updatePuchaseById");
const getPurchaseByUserId = require("../controllers/getPurchaseByUserId");
const insertWishListByUserId = require("../controllers/insertWishListByUserId");
const deleteWishList = require("../controllers/deleteWishList");
const getWishListByUserId = require("../controllers/getWishListByUserId");


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
router.get("/movies/search/guest", searchMovieForGuest)
router.get("/genre/:id",getGenreById)
router.get("/address/:id", getAddressById)
router.get("/address/user/:id", getAddressByUserId)
router.get("/purchases", getPurchases)
router.get("/purchase/:id", getPurchaseByUserId)
router.get("/wishList/:id",getWishListByUserId)
router.post("/address/:id", InsertAddressByUserId)
router.post("/genre",insertGenre)
router.post("/language",insertLanguage)
router.post("/format", insertFormat)
router.post("/user", insertUser)
router.post("/movie", insertMovie)
router.post("/rating", InsertRating)
router.post("/purchase/guest", insertGuestPurchase)
router.post("/purchase/:id", InsertPurchase)
router.post("/wishList/:id", insertWishListByUserId)
router.put("/movie/:id", updateMovie)
router.put("/user/:id", updateUser)
router.put("/genre/:id", updateGenre)
router.put("/purchase/:id", updatePuchaseById)
router.delete("/movie/:id",deleteMovie)
router.delete("/user/:id", deleteUser)
router.delete("/wishList/:id", deleteWishList)
router.post("/checkout", order)

module.exports = router;
