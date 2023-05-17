const { Movie, Inventory, Format, Genre, Language } = require("../db");

const updateMovie = async (req, res) => {
    const {id} = req.params;
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
      !id ||
      !name ||
      !image ||
      !description ||
      !date ||
      !FormatId ||
      !LanguageId ||
      !quantity ||
      !genres
    ) {
      res.status(500).json({ error: "Missing a value" });
      return;
    }

    const movie = await Movie.findByPk(id);
    if (!movie) {
      res.status(404).json({ error: "Movie not found" });
      return;
    }

    await movie.update({
      name,
      image,
      description,
      price,
      date,
      FormatId,
      LanguageId,
    });

    const inventory = await Inventory.findOne({ where: { MovieId: id } });
    if (inventory) {
      await inventory.update({ quantity });
    } else {
      await Inventory.create({ quantity, MovieId: id });
    }

    await movie.setGenres(genres);

    const updated = await Movie.findByPk(id, {
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

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateMovie;