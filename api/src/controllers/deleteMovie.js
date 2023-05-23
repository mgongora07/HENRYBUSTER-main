const { Movie, Inventory, Format, Genre, Language } = require("../db");
const { Op } = require("sequelize");

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    const updatedMovie = await movie.update({
      status: false,
    });

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteMovie;
