'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    static associate(models) {
      Brewery.hasMany(models.Brand, {
        foreignKey: "breweryId"
      })
    }
  };
  Brewery.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brewery',
  });
  return Brewery;
};