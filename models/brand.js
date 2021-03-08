'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.belongsTo(models.Substyle, {
        foreignKey: "substyleId"
      }),
      Brand.belongsTo(models.Brewery, {
        foreignKey: "breweryId"
      })
    }
  };
  Brand.init({
    substyleId: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    breweryId: DataTypes.INTEGER,
    abv: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};