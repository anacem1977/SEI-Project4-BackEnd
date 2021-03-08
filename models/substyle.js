'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Substyle extends Model {
    static associate(models) {
      Substyle.belongsTo(models.Origin, {
        foreignKey: "styleId"
      }),
      Substyle.hasMany(models.Brand, {
        foreignKey: "substyleId"
      })
    }
  };
  Substyle.init({
    styleId: DataTypes.INTEGER,
    substyle: DataTypes.STRING,
    description: DataTypes.TEXT,
    abv: DataTypes.STRING,
    ibu: DataTypes.STRING,
    glassware: DataTypes.STRING,
    pairing: DataTypes.STRING,
    flavor: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Substyle',
  });
  return Substyle;
};