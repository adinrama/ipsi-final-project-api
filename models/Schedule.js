module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      hospitalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scheduleTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      available: {
        type: DataTypes.ENUM,
        values: ["yes", "no"],
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { tableName: "schedules" }
  );

  return Schedule;
};