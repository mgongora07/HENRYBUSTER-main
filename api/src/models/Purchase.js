const { DataTypes, literal } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Purchase",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: literal("CURRENT_TIMESTAMP"),
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendiente",
      },
    },
    {
      timestamps: false,
    }
  );
};
