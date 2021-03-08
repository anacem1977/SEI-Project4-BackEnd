'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Brands", [
      {
        substyleId: 1,
        brand: "Ayinger Celebrator",
        breweryId: 3,
        abv: "6.7",
        likes: 0
      },
      {
        substyleId: 1,
        brand: "Salvator",
        breweryId: 13,
        abv: "7.9",
        likes: 0
      },
      {
        substyleId: 1,
        brand: "Korbinian",
        breweryId: 4,
        abv: "7.4",
        likes: 0
      },
      {
        substyleId: 2,
        brand: "Samuel Adams Winter Lager",
        breweryId: 6,
        abv: "5.6",
        likes: 0
      },
      {
        substyleId: 2,
        brand: "Samuel Adams Chocolate Bock",
        breweryId: 6,
        abv: "5.8",
        likes: 0
      },
      {
        substyleId: 2,
        brand: "Samuel Adams Cherry Chocolate Bock",
        breweryId: 6,
        abv: "5.8",
        likes: 0
      },
      {
        substyleId: 2,
        brand: "Michelob AmberBock",
        breweryId: 2,
        abv: "5.2",
        likes: 0
      },
      {
        substyleId: 3,
        brand: "Indian Brown Ale",
        breweryId: 9,
        abv: "7.2",
        likes: 0
      },
      {
        substyleId: 3,
        brand: "Palo Santo Marron",
        breweryId: 9,
        abv: "12",
        likes: 0
      },
      {
        substyleId: 3,
        brand: "Best Brown Ale",
        breweryId: 5,
        abv: "5.8",
        likes: 0
      },
      {
        substyleId: 4,
        brand: "Newcastle Brown Ale",
        breweryId: 10,
        abv: "4.7",
        likes: 0
      },
      {
        substyleId: 4,
        brand: "Maduro Brown Ale",
        breweryId: 7,
        abv: "5.5",
        likes: 0
      },
      {
        substyleId: 4,
        brand: "Turbodog",
        breweryId: 1,
        abv: "5.6",
        likes: 0
      },
      {
        substyleId: 4,
        brand: "Southern Pecan",
        breweryId: 11,
        abv: "4.5",
        likes: 0
      },
      {
        substyleId: 5,
        brand: "Bud Light",
        breweryId: 2,
        abv: "4.2",
        likes: 0
      },
      {
        substyleId: 5,
        brand: "Bud Light Lime",
        breweryId: 2,
        abv: "4.2",
        likes: 0
      },
      {
        substyleId: 5,
        brand: "Michelob Ultra",
        breweryId: 2,
        abv: "4.2",
        likes: 1
      },
      {
        substyleId: 5,
        brand: "Coors Light",
        breweryId: 8,
        abv: "4.2",
        likes: 0
      },
      {
        substyleId: 5,
        brand: "Miller Lite",
        breweryId: 12,
        abv: "4.2",
        likes: 0
      },
    ],{});
  },
 

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
