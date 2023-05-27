const { Purchase } = require("../db");

const updatePuchaseById = async (req, res) => {
  const { id } = req.params;
  try {
    const { status } = req.body;
    

    const purchase = await Purchase.findByPk(id);

    await purchase.update({status});

    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePuchaseById;
