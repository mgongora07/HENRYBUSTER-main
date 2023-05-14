const {User} = require('../db');


const insertUser= async (req, res) => {
    try {
        const{name, password, isAdmin} = req.body
        const user = await User.create({name, password, isAdmin});

      res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = insertUser;