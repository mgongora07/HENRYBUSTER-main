const { Purchase, Inventory, Address, User } = require("../db");
const { v4: uuidv4 } = require('uuid');


const insertGuestPurchase = async (req, res) => {
  try {
    const uuid = uuidv4();
    const {
      purchases,
      name,
      phoneNumber,
      email,
      street,
      city,
      state,
      postalCode,
      country,
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

    const createGuest = await User.create({
      id: uuid,
      name,
      phoneNumber,
      email,
      admin: false
    });

    const createAddress = await Address.create({
      street,
      city,
      state,
      postalCode,
      country,
      UserId: createGuest.id,
    });

    const createdPurchases = await Purchase.bulkCreate(
      purchases.map((x) => {
        return { ...x, AddressId: createAddress.id, UserId: createGuest.id };
      })
    );
    // Disminuir la cantidad en el inventario
    for (const purchase of createdPurchases) {
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

module.exports = insertGuestPurchase;
