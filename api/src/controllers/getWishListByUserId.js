const { Movie, WishList, Format, Inventory, Language, Genre } = require("../db");

const getWishListByUserId = async (req, res) => {
  const { id } = req.params;


  try {
    const wishList = await WishList.findAll({
        where:{
            UserId: id
        },
        include:{
            model:Movie,
            include:[
                {
                    model: Inventory,
                    attributes:["quantity"]
                },{
                    model: Language,
                    attributes:["name"]
                },{
                    model: Genre,
                    attributes:["name"],
                    through: { attributes: [] }
                },{
                    model: Format,
                    attributes:["name"]
                }
            ]
        }
    });

   
    res.status(200).json(wishList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getWishListByUserId;
