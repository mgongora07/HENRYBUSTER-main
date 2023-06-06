const { Movie, WishList, User } = require("../db");

const insertWishListByUserId = async (req, res) => {
  const { id } = req.params;
  const { MovieId } = req.body;

  try {
    const user = await User.findByPk(id);
    const movie = await Movie.findByPk(MovieId);

    if (!user || !movie) {
      throw new Error("Usuario o película no encontrada.");
    }

    const wishList = await WishList.create();
    await wishList.setUser(user);
    await wishList.setMovie(movie);

    res.status(200).json(wishList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = insertWishListByUserId;
