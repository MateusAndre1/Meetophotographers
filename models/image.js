module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: false
      },
      binImage: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isProfile: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    }); 
    Image.associate = function (models) {
      Image.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Image;
  };
