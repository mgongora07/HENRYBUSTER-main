const { WishList } = require("../db");

const deleteWishList = async (req, res) => {
  const { id } = req.params;

  try {
    console.log(id, 'ide de la ruta')
    const wishList = await WishList.findByPk(id);
    if (!wishList) {
      throw new Error('WishList no encontrada.');
    }


    await wishList.destroy();

    res.status(200).json(wishList);
  } catch (error) {
    res.status(500).json({error: error.message})
  }

};

module.exports = deleteWishList;
