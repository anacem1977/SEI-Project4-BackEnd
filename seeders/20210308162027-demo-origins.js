'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Origins', 
      [
        {
          origin: "Germany",
          style: "Bock",
          description: "Stronger than a typical lager, bock is dark amber in color with robust malt flavors and very light hoppiness."
        },
        {
          origin: "UK",
          style: "Brown Ale",
          description: "Relatively mild bitterness and a hoppy flavor in the background to accent the malt. It often has notes of bread, caramel, chocolate, nuts and raisins."

        },
        {
          origin: "Germany",
          style: "Pale Lager",
          description: "Very pale-to-golden lager beer with a well-attenuated body and varying degree of noble hop bitterness."

        },
    ], 
     {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Origins', null, {});
  }
};
