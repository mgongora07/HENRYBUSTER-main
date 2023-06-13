const { Purchase, Inventory, User, Address, PurchaseMovie } = require("../db");

const insertPurchase = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      purchases,
      name,
      phoneNumber,
      AddressId
    } = req.body;

    for (const purchase of purchases) {
      const inventory = await Inventory.findOne({
        where: { MovieId: purchase.MovieId },
      });
      if (inventory.quantity < purchase.quantity) {
        throw new Error(
          "La cantidad de compra supera la cantidad disponible en el inventario."
        );
      }
    }

    const user = await User.findByPk(id);

    const udateUser = await user.update({
      name,
      phoneNumber,
    });
/*
    const createAddress = await Address.create({
      street,
      city,
      state,
      postalCode,
      country,
      UserId: id,
    });
*/
    const createdPurchases = await Purchase.create(
      
      {AddressId, UserId: id}
     
    );
    const purchaseMovie = await PurchaseMovie.bulkCreate(
      purchases.map((x) => {
        return {
          ...x,
          PurchaseId: createdPurchases.id,
          UserId: id,
        };
      })
    );


    // Disminuir la cantidad en el inventario
    for (const purchase of purchaseMovie) {
      const inventory = await Inventory.findOne({
        where: { MovieId: purchase.MovieId },
      });
      inventory.quantity -= purchase.quantity;
      await inventory.save();
    }

    res.status(200).json(createdPurchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = insertPurchase;
