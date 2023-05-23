const { Movie, Inventory, Format, Genre, Language } = require("../db");

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await Movie.findByPk(id, {
      include: [
        {
          model: Inventory,
          attributes: ["quantity"],
        },
        {
          model: Format,
          attributes: ["name"],
        },
        {
          model: Genre,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
        {
          model: Language,
          attributes: ["name"],
        },
      ],
    });

    const formattedDate = movies.date.toISOString().slice(0, 10);

    const formattedMovie = { ...movies.toJSON(), date: formattedDate };

    res.status(200).json(formattedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getMovieById;
