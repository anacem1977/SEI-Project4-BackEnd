'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Substyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Substyle.init({
    styleId: DataTypes.INTEGER,
    substyle: DataTypes.STRING,
    description: DataTypes.STRING,
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