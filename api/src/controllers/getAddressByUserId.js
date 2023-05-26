const { User } = require("../db");

const getAddressByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    const addresses = await user.getAddresses();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAddressByUserId;
