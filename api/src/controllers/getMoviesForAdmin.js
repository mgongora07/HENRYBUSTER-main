const {Movie, Inventory, Format, Genre, Language} = require('../db');


const getMoviesForAdmin = async (req, res) => {
    try {
        const movies = await Movie.findAll({
          where:{
            status: true
          },
            include: [
              {
                model: Inventory,
                attributes: ['quantity'],
              },
              {
                model: Format,
                attributes: ['name']
              },{
                model:Genre,
                attributes: ['name'],
                through: { attributes: [] }
              },{
                model:Language,
                attributes: ["name"]
              }
            ],
            order: [['id', 'ASC']]
          });

      res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getMoviesForAdmin;
  