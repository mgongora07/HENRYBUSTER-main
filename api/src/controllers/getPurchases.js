const { Movie, Purchase, Address, User, Genre, Format } = require("../db");
const { Op } = require("sequelize");

const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.findAll({
      include: [
        {
          model: Movie,
          include: [
            {
              model: Genre,
              attributes: ["name"],
              through: { attributes: [] },
            },
            {
              model: Format,
              attributes: ["name"],
            },
          ],
        },
        {
          model: Address,
        },
        {
          model: User,
        },
        {
          model: Address,
        },
      ],
      order: [["date", "DESC"]],
    });

    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPurchases;
