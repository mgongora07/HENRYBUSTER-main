const { Genre } = require("../db");

const updateGenre = async (req, res) => {
    const { id } = req.params;
  try {
    const { name } = req.body;
    const genre = await Genre.findByPk(id);
    const updateGenre = await genre.update({
        name
    })
    res.status(200).json(updateGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateGenre;
