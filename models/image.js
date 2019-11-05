module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: {
        type: DataTypes.STRING,
        default: ""
      },
      binImage: {
        type: DataTypes.BLOB,
        allowNull: false
      }
    });
    
    return Image;
  };
  