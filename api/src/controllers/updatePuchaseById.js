const { Purchase, PurchaseMovie, Inventory } = require("../db");

const updatePuchaseById = async (req, res) => {
  const { id } = req.params;
  try {
    const { status } = req.body;
    

    const purchase = await Purchase.findByPk(id);

    if(purchase.status==="cancelled"){
        throw new Error(
            "no se puede cambiar el estado de una devolucion"
          );
    }

    await purchase.update({status});

    if(status==="cancelled"){
       const purchaseMovie = await PurchaseMovie.findAll({where: {
        PurchaseId: id
        
       }})

      

       for (const purchase of purchaseMovie) {
        const inventory = await Inventory.findOne({
          where: { MovieId: purchase.MovieId },
        });
        inventory.quantity += purchase.quantity;
        await inventory.save();
      }
  

    }
  
    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePuchaseById;
