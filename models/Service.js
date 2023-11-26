module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      hospitalEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vaccin: {
        type: DataTypes.ENUM,
        values: ["yes", "no"],
        defaultValue: "no",
      },
      pcrTest: {
        type: DataTypes.ENUM,
        values: ["yes", "no"],
        defaultValue: "no",
      },
      rapidAntigenTest: {
        type: DataTypes.ENUM,
        values: ["yes", "no"],
        defaultValue: "no",
      },
      genose: {
        type: DataTypes.ENUM,
        values: ["yes", "no"],
        defaultValue: "no",
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    { tableName: "services" }
  );

  return Service;
};
