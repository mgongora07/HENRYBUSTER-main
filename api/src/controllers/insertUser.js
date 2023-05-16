const {User} = require('../db');


const insertUser= async (req, res) => {
    try {
        const{id,name, admin, username, phoneNumber, email} = req.body
        const user = await User.create({id,name, admin, username, phoneNumber, email});

      res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = insertUser;