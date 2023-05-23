const { Movie, Inventory, Format, Genre, Language } = require("../db");
const {Op} = require("sequelize")
const searchMovieByName = async (req, res) => {
  const { name } = req.query;
  try {
    const movies = await Movie.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%",
        },
        status: true,
      },
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
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Language,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = searchMovieByName;
