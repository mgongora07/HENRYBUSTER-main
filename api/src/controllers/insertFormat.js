const { Format } = require("../db");

const insertFormat = async (req, res) => {
  try {
    const { name } = req.body;
    const format = await Format.create({ name });

    res.status(200).json(format);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = insertFormat;
