const {Language} = require('../db');


const insertLanguage= async (req, res) => {
    try {
        const{name} = req.body
        const language = await Language.create({name});

      res.status(200).json(language);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = insertLanguage;