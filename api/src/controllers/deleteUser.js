const {User} = require("../db");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    const deletedUser = await user.update({
      state: false,
    });

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
