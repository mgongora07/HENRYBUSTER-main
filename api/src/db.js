require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const user = require("./models/User");
const format = require("./models/Format");
const genre = require("./models/Genre");
const inventory = require("./models/Inventory");
const movie = require("./models/Movie");
const purchase = require("./models/Purchase");
const rating = require("./models/Rating");
const language = require("./models/Language");
const address = require("./models/Address");
const purchaseMovie = require("./models/PurchaseMovie");
const wishList = require("./models/WishList");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henrybuster`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

user(sequelize);
format(sequelize);
genre(sequelize);
inventory(sequelize);
purchase(sequelize);
movie(sequelize);
rating(sequelize);
language(sequelize);
address(sequelize);
purchaseMovie(sequelize);
wishList(sequelize);
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
const {
  User,
  Format,
  Genre,
  Inventory,
  Purchase,
  Movie,
  Rating,
  Language,
  Address,
  PurchaseMovie,
  WishList
} = sequelize.models;

Movie.belongsToMany(Genre, { through: "MovieGenre" });
Genre.belongsToMany(Movie, { through: "MovieGenre" });

Format.hasOne(Movie);
Movie.belongsTo(Format);

Movie.hasOne(Inventory);
Inventory.belongsTo(Movie);

Movie.hasMany(Rating);
Rating.belongsTo(Movie);

User.hasOne(Rating);
Rating.belongsTo(User);

Language.hasOne(Movie);
Movie.belongsTo(Language);

Address.hasOne(Purchase);
Purchase.belongsTo(Address);

User.hasMany(Purchase);
Purchase.belongsTo(User);

User.hasMany(Address);
Address.belongsTo(User);

WishList.belongsTo(User);
WishList.belongsTo(Movie);

Purchase.belongsToMany(Movie, {
  through: PurchaseMovie,
  foreignKey: "PurchaseId",
  otherKey: "MovieId",
});

Movie.belongsToMany(Purchase, {
  through: PurchaseMovie,
  foreignKey: "MovieId",
  otherKey: "PurchaseId",
});
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
