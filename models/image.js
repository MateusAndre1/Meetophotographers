module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
      firstName: {
        type: DataTypes.STRING
      },
      profileImage: {
        type: DataTypes.STRING
      }
    });
    
    return Image;
  };