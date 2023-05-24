const {Genre} = require("../db");

const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    const updatedGenre = await genre.update({
      status: false,
    });

    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteGenre;
