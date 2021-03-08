'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Origin extends Model {
    static associate(models) {
      Origin.hasMany(models.Substyle, {
        foreignKey: "styleId"
      })
    }
  };
  Origin.init({
    origin: DataTypes.STRING,
    style: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Origin',
  });
  return Origin;
};