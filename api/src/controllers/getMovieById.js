const {Movie, Inventory, Format, Genre, Language} = require('../db');


const getMovieById = async (req, res) => {
    const {id} = req.params;
    try {
        const movies = await Movie.findByPk(id,{
            include: [
              {
                model: Inventory,
                attributes: ['quantity'] 
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
            ]
          });

      res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getMovieById;
  