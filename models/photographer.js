module.exports = function (sequelize, DataTypes) {
  var Photographer = sequelize.define("Photographer", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isReady: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });
  Photographer.associate = function (models) {
    Photographer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Photographer;
};