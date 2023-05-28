const {Genre} = require('../db');


const getGenreById= async (req, res) => {
    try {
        const{id}= req.params
        const genre = await Genre.findByPk(id);

      res.status(200).json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getGenreById;
  