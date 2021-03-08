'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Substyles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      styleId: {
        type: Sequelize.INTEGER
      },
      substyle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      abv: {
        type: Sequelize.STRING
      },
      ibu: {
        type: Sequelize.STRING
      },
      glassware: {
        type: Sequelize.STRING
      },
      pairing: {
        type: Sequelize.STRING
      },
      flavor: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Substyles');
  }
};