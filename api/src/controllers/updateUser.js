const { User } = require("../db");

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, password, isAdmin } = req.body;
    if (!id || !name || !password || typeof isAdmin !== "boolean") {
      res.status(500).json({ error: "Missing a value" });
    }

    const user = await User.findByPk(id);

    await user.update({ name, password, isAdmin });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
