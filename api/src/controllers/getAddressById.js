const { Address } = require("../db");
//Esta busca por el id de adress
const getAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const getAddress = await Address.findByPk(id);
    res.status(200).json(getAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAddressById;
