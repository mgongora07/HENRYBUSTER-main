const {Movie, Inventory, Format, Genre, Language} = require('../db');
const { Op } = require('sequelize');

const searchMovieForGuest = async (req, res) => {
    try {
      const { name } = req.query;
        const movies = await Movie.findAll({
          where: {
            name: {
              [Op.iLike]: "%" + name + "%",
            },
            status: true,
          },
            include: [
              {
                model: Inventory,
                attributes: ['quantity'],
                where:{
                  quantity:{
                    [Op.gt]: 0
                  }
                } 
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
  
  module.exports = searchMovieForGuest;
