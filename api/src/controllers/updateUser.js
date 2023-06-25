const { User } = require("../db");

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { admin } = req.body;
    if (typeof admin !== "boolean") {
      res.status(500).json({ error: "Missing a value" });
    }

    const user = await User.findByPk(id);

    await user.update({admin});

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
