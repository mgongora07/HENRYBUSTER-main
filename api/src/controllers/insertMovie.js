const { Movie, Inventory, Format, Genre, Language } = require("../db");

const insertMovie = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      price,
      date,
      FormatId,
      LanguageId,
      quantity,
      genres,
    } = req.body;

    if (
      !name ||
      !image ||
      !description ||
      !date ||
      !FormatId ||
      !LanguageId ||
      !quantity ||
      !genres
    ) {
      res.status(500).json({ error: "missing a value" });
    }

    const movie = await Movie.create({
      name,
      image,
      description,
      price,
      date,
      FormatId,
      LanguageId,
    });
    await movie.addGenres(genres);

    const inventory = await Inventory.create({ quantity });

    await movie.setInventory(inventory);

    const created = await Movie.findByPk(movie.id, {
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
    res.status(200).json(created);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = insertMovie;
