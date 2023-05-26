const { User, Address } = require("../db");

const InsertAddressByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("que pasa")
    const { street, city, state, postalCode, country } = req.body;
    const user = await User.findByPk(id);
    const newAddress = await Address.create({ street, city, state, postalCode, country })
    
    await user.addAddress(newAddress);
    await newAddress.reload();
    res.status(200).json(newAddress);
  } catch (error) {
    res.status(500).json({ error: error.message + " que pasa cabron" });
  }
};

module.exports = InsertAddressByUserId;
