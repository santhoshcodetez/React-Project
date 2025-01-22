'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    customerId: DataTypes.STRING,
    orderDate: DataTypes.INTEGER,
    totalAmount: DataTypes.INTEGER,
    status: DataTypes.STRING,
    paymentmethod: DataTypes.STRING,
    shippingAddress: DataTypes.STRING,
    orderStatus: DataTypes.STRING,
    discountApplied: DataTypes.INTEGER,
    deliveryDate: DataTypes.INTEGER
    //finaliprice:ta/da
    
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};