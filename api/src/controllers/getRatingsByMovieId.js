const { User, Rating } = require("../db");

const getRatingsByMovieId = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findAll({
      where: {
        MovieId: id,
      },
      include: [
        {
          model: User,
          attributes: ['id','name','username']
        },
      ],
    });

    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRatingsByMovieId;
