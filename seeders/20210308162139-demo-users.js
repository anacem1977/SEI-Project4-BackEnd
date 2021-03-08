'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', 
      [
        {
          username: "acmc",
          password: "rana",
          name: "Ana Cecilia",
          email: "anace_m@hotmail.com"
        },
        {
          username: "nat",
          password: "princess",
          name: "Natalia",
          email: "nat_m@hotmail.com"
        },
    ], 
     {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
