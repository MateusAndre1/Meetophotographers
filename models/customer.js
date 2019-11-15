module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    Customer.associate = function(models) {
      Customer.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Customer;
  };