const { Genre } = require("../db");

const insertGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const genre = await Genre.create({ name });

    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = insertGenre;
