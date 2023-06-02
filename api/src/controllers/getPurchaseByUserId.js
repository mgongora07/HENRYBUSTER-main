const { Movie, Purchase, Address,User } = require('../db');


const getPurchaseByUserId = async (req, res) => {
    const { id } = req.params

  try {
    const purchase = await Purchase.findAll({
        where:{
            UserId: id
        },
      include: [
        {
          model: Movie,
         
        },
        {
          model: Address,
        },
        {
            model: User
        }
      ],
      order: [['date', 'DESC']],
    });

    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPurchaseByUserId;