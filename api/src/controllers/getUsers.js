const {User, Address} = require('../db');


const getUsers= async (req, res) => {
    try {
        const users = await User.findAll({
          where: {state: true},
          include: Address
        });

      res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getUsers;
  