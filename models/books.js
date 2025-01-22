'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  
  Books.init({ id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4
  },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    bookCode: DataTypes.STRING,
    publisher: DataTypes.STRING,
    publishYear: DataTypes.INTEGER,
    status: DataTypes.STRING,
    customerId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};