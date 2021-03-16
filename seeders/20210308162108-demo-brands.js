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
        brand: "Korbinian",
        breweryId: 4,
        abv: "7.4",
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
        brand: "Spaten Optimator",
        breweryId: 17,
        abv: "7.6",
        likes: 0
      },
      {
        substyleId: 1,
        brand: "Troegenator",
        breweryId: 16,
        abv: "8.2",
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
        substyleId: 2,
        brand: "Noche Buena",
        breweryId: 14,
        abv: "5.9",
        likes: 1
      },
      {
        substyleId: 2,
        brand: "Shiner Bock",
        breweryId: 15,
        abv: "4.4",
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
        substyleId: 3,
        brand: "Hazelnut Brown Nectar",
        breweryId: 18,
        abv: "5.6",
        likes: 0
      },
      {
        substyleId: 3,
        brand: "Tumbler Autumn Brown Ale",
        breweryId: 25,
        abv: "5.5",
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
        substyleId: 4,
        brand: "Nut Brown Ale",
        breweryId: 26,
        abv: "5.0",
        likes: 0
      },
      {
        substyleId: 5,
        brand: "Amstel Light",
        breweryId: 49,
        abv: "3.5",
        likes: 1
      },
      {
        substyleId: 5,
        brand: "Tsingtao Beer",
        breweryId: 60,
        abv: "4.0",
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

      {
        substyleId: 6,
        brand: "Andygator",
        breweryId: 1,
        abv: "8",
        likes: 0
      },
      {
        substyleId: 6,
        brand: "Cultivator",
        breweryId: 16,
        abv: "6.9",
        likes: 0
      },      
      {
        substyleId: 6,
        brand: "Dead Guy Ale",
        breweryId: 18,
        abv: "6.8",
        likes: 0
      },      
      {
        substyleId: 6,
        brand: "Hofbräu Maibock (Urbock)",
        breweryId: 19,
        abv: "7.2",
        likes: 0
      },      
      {
        substyleId: 6,
        brand: "Mardi Gras Bock",
        breweryId: 1,
        abv: "6.5",
        likes: 0
      },

      {
        substyleId: 7,
        brand: "Eisbock",
        breweryId: 22,
        abv: "9.2",
        likes: 0
      },
      {
        substyleId: 7,
        brand: "Hermannator",
        breweryId: 23,
        abv: "9.5",
        likes: 0
      },
      {
        substyleId: 7,
        brand: "Raspberry Eisbock",
        breweryId: 21,
        abv: "15.5",
        likes: 0
      },
      {
        substyleId: 7,
        brand: "Tap 9 Aventinus Eisbock",
        breweryId: 20,
        abv: "12.0",
        likes: 0
      },
      {
        substyleId: 7,
        brand: "Winter Wonder Lager",
        breweryId: 21,
        abv: "13.0",
        likes: 0
      },
      {
        substyleId: 8,
        brand: "Ayinger Weizenbock",
        breweryId: 3,
        abv: "7.1",
        likes: 0
      },
      {
        substyleId: 8,
        brand: "Moonglow Weizenbock",
        breweryId: 24,
        abv: "8.7",
        likes: 0
      },
      {
        substyleId: 8,
        brand: "Tap 5 Hopfenweisse",
        breweryId: 20,
        abv: "8.2",
        likes: 0
      },
      {
        substyleId: 8,
        brand: "Tap 6 Aventinus",
        breweryId: 20,
        abv: "8.2",
        likes: 0
      },
      {
        substyleId: 8,
        brand: "Vitus",
        breweryId: 4,
        abv: "7.7",
        likes: 0
      },
      {
        substyleId: 9,
        brand: "Belgian Freeze Belgian Style Winter Ale",
        breweryId: 30,
        abv: "8.0",
        likes: 0
      },
      {
        substyleId: 9,
        brand: "Cold Front",
        breweryId: 31,
        abv: "7.2",
        likes: 0
      },
      {
        substyleId: 9,
        brand: "Grottenbier",
        breweryId: 32,
        abv: "6.5",
        likes: 0
      },
      {
        substyleId: 9,
        brand: "Leffe Brune / Brown",
        breweryId: 28,
        abv: "6.5",
        likes: 0
      },
      {
        substyleId: 9,
        brand: "Noire De Chambly / Chambly Noire",
        breweryId: 29,
        abv: "6.2",
        likes: 0
      },
      {
        substyleId: 10,
        brand: "90 Shilling",
        breweryId: 35,
        abv: "5.3",
        likes: 0
      },
      {
        substyleId: 10,
        brand: "Original Oak Aged Beer",
        breweryId: 36,
        abv: "6.6",
        likes: 0
      },
      {
        substyleId: 10,
        brand: "Robert The Bruce",
        breweryId: 33,
        abv: "6.5",
        likes: 0
      },
      {
        substyleId: 10,
        brand: "Scottish Ale",
        breweryId: 34,
        abv: "5.2",
        likes: 0
      },
      {
        substyleId: 10,
        brand: "Winter Ale",
        breweryId: 37,
        abv: "6.1",
        likes: 0
      },
      {
        substyleId: 11,
        brand: "Amber",
        breweryId: 1,
        abv: "4.5",
        likes: 0
      },
      {
        substyleId: 11,
        brand: "George Killian's Irish Red",
        breweryId: 8,
        abv: "4.9",
        likes: 0
      },
      {
        substyleId: 11,
        brand: "Lager",
        breweryId: 37,
        abv: "5.2",
        likes: 0
      },
      {
        substyleId: 11,
        brand: "Toasted Lager",
        breweryId: 57,
        abv: "5.5",
        likes: 0
      },
      {
        substyleId: 11,
        brand: "Traditional Lager",
        breweryId: 56,
        abv: "4.5",
        likes: 0
      },
      {
        substyleId: 12,
        brand: "Dos Equis Ambar",
        breweryId: 14,
        abv: "4.7",
        likes: 5
      },
      {
        substyleId: 12,
        brand: "Indio",
        breweryId: 14,
        abv: "4.1",
        likes: 3
      },
      {
        substyleId: 12,
        brand: "Samuel Adams Boston Lager",
        breweryId: 6,
        abv: "5",
        likes: 5
      },
      {
        substyleId: 12,
        brand: "Victoria",
        breweryId: 55,
        abv: "4.0",
        likes: 10
      },
      {
        substyleId: 12,
        brand: "Vienna Style Lager",
        breweryId: 25,
        abv: "5.3",
        likes: 0
      },
      {
        substyleId: 13,
        brand: "90 Minute IPA",
        breweryId: 9,
        abv: "9.0",
        likes: 0
      },
      {
        substyleId: 13,
        brand: "DirtWolf",
        breweryId: 24,
        abv: "8.7",
        likes: 0
      },
      {
        substyleId: 13,
        brand: "Enjoy By IPA",
        breweryId: 59,
        abv: "9.4",
        likes: 0
      },
      {
        substyleId: 13,
        brand: "Hopslam Ale",
        breweryId: 5,
        abv: "10.0",
        likes: 0
      },
      {
        substyleId: 13,
        brand: "Hoptimum",
        breweryId: 25,
        abv: "10.6",
        likes: 0
      },
      {
        substyleId: 14,
        brand: "60 Minute IPA",
        breweryId: 9,
        abv: "6.0",
        likes: 0
      },
      {
        substyleId: 14,
        brand: "Sculpin",
        breweryId: 58,
        abv: "7.0",
        likes: 0
      },
      {
        substyleId: 14,
        brand: "Stone IPA",
        breweryId: 59,
        abv: "6.9",
        likes: 0
      },
      {
        substyleId: 14,
        brand: "Torpedo Extra IPA",
        breweryId: 25,
        abv: "7.2",
        likes: 0
      },
      {
        substyleId: 14,
        brand: "Two Hearted Ale",
        breweryId: 5,
        abv: "7.0",
        likes: 0
      },
      {
        substyleId: 15,
        brand: "Brutal",
        breweryId: 18,
        abv: "6.2",
        likes: 0
      },
      {
        substyleId: 15,
        brand: "East IPA",
        breweryId: 37,
        abv: "6.9",
        likes: 0
      },
      {
        substyleId: 15,
        brand: "Goose IPA",
        breweryId: 27,
        abv: "5.9",
        likes: 0
      },
      {
        substyleId: 15,
        brand: "Guinness Nitro IPA",
        breweryId: 40,
        abv: "5.8",
        likes: 0
      },
      {
        substyleId: 15,
        brand: "India Ale",
        breweryId: 26,
        abv: "5.0",
        likes: 0
      },
      {
        substyleId: 16,
        brand: "Brahma",
        breweryId: 47,
        abv: "4.6",
        likes: 0
      },
      {
        substyleId: 16,
        brand: "Corona Extra",
        breweryId: 55,
        abv: "4.6",
        likes: 0
      },
      {
        substyleId: 16,
        brand: "Dos Equis Special Lager",
        breweryId: 14,
        abv: "4.2",
        likes: 0
      },
      {
        substyleId: 16,
        brand: "Miller Genuine Draft",
        breweryId: 12,
        abv: "4.7",
        likes: 2
      },
      {
        substyleId: 16,
        brand: "Miller High Life",
        breweryId: 12,
        abv: "4.6",
        likes: 4
      },
      {
        substyleId: 16,
        brand: "Modelo Especial",
        breweryId: 55,
        abv: "4.4",
        likes: 0
      },
      {
        substyleId: 16,
        brand: "Sagres Cerveja",
        breweryId: 46,
        abv: "5.0",
        likes: 0
      },
      {
        substyleId: 16,
        brand: "Skol",
        breweryId: 41,
        abv: "4.7",
        likes: 0
      },
      {
        substyleId: 17,
        brand: "Beck's",
        breweryId: 61,
        abv: "5.0",
        likes: 0
      },
      {
        substyleId: 17,
        brand: "Bohemia Clásica",
        breweryId: 14,
        abv: "4.7",
        likes: 0
      },
      {
        substyleId: 18,
        brand: "Negra Modelo",
        breweryId: 55,
        abv: "5.4",
        likes: 0
      },
      {
        substyleId: 19,
        brand: "Montejo",
        breweryId: 55,
        abv: "4.5",
        likes: 0
      },
      {
        substyleId: 20,
        brand: "Carlsberg Beer",
        breweryId: 52,
        abv: "5.0",
        likes: 0
      },
      {
        substyleId: 20,
        brand: "Cinco Estrellas",
        breweryId: 25,
        abv: "5.5",
        likes: 0
      },
      {
        substyleId: 20,
        brand: "Harbin Lager",
        breweryId: 42,
        abv: "5.5",
        likes: 0
      },
      {
        substyleId: 20,
        brand: "Heineken Lager Beer",
        breweryId: 10,
        abv: "5.0",
        likes: 3
      },
      {
        substyleId: 20,
        brand: "Kronenburg 1664",
        breweryId: 53,
        abv: "5.5",
        likes: 1
      },
      {
        substyleId: 20,
        brand: "Quilmes",
        breweryId: 54,
        abv: "4.9",
        likes: 1
      },
      {
        substyleId: 20,
        brand: "Stella Artois",
        breweryId: 38,
        abv: "5.0",
        likes: 8
      },
      {
        substyleId: 20,
        brand: "Yanjing Beer",
        breweryId: 43,
        abv: "4.7",
        likes: 0
      },
      {
        substyleId: 21,
        brand: "Delirium Tremens",
        breweryId: 51,
        abv: "8.5",
        likes: 0
      },
      {
        substyleId: 21,
        brand: "Duvel",
        breweryId: 50,
        abv: "8.5",
        likes: 20
      },
      {
        substyleId: 21,
        brand: "Matilda",
        breweryId: 27,
        abv: "7.0",
        likes: 0
      },
      {
        substyleId: 22,
        brand: "Sapporo Premium Beer",
        breweryId: 39,
        abv: "4.9",
        likes: 0
      },
      {
        substyleId: 23,
        brand: "Blue Moon Belgian White",
        breweryId: 8,
        abv: "5.4",
        likes: 0
      },
      {
        substyleId: 24,
        brand: "Guinness Draught",
        breweryId: 40,
        abv: "4.2",
        likes: 0
      },
      {
        substyleId: 25,
        brand: "Erdinger Weissbier Dunkel",
        breweryId: 48,
        abv: "5.3",
        likes: 0
      },
      {
        substyleId: 26,
        brand: "Estrella Galicia Especial",
        breweryId: 44,
        abv: "5.5",
        likes: 0
      },
      {
        substyleId: 27,
        brand: "Pale Ale",
        breweryId: 25,
        abv: "5.6",
        likes: 0
      },
      {
        substyleId: 27,
        brand: "Zombie Dust",
        breweryId: 33,
        abv: "6.2",
        likes: 0
      },
      {
        substyleId: 28,
        brand: "Belgian Session",
        breweryId: 6,
        abv: "4.3",
        likes: 0
      },
      {
        substyleId: 28,
        brand: "Blue Moon Rounder Belgian-Style Pale",
        breweryId: 8,
        abv: "5.6",
        likes: 0
      },
      {
        substyleId: 29,
        brand: "Taddy Porter",
        breweryId: 26,
        abv: "5.0",
        likes: 0
      },
      {
        substyleId: 29,
        brand: "London Porter",
        breweryId: 62,
        abv: "5.4",
        likes: 0
      },
    ],{});
  },
 

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
