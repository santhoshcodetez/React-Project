'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customer.hasMany(models.Books, {
        foreignKey: "customerId",
        as: "bookdetails"
      }),

        customer.hasMany(models.order, {
          foreignKey: "customerId",
          as: "orderDetails"
        }),
        customer.hasMany(models.employee, {
          foreignKey: "customerId",
          as: "employeedetails"
        })
    }
  }
  customer.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.BIGINT,
    address: DataTypes.STRING,
    membershipLevel: DataTypes.STRING,
    joinDate: DataTypes.INTEGER,
    genreBook: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};