'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Brewerys", [
      {
        name: "Abita Brewing Co.",
        address: "Covington, Louisiana, United States",
        url: "abita.com"
      },
      {
        name: "Anheuser-Busch",
        address: "Saint Louis, Missouri, United States",
        url: "anheuser-busch.com"
      },
      {
        name: "Ayinger Privstbrauerei",
        address: "Aying, Germany",
        url: "ayinger-bier.de"
      },
      {
        name: "Bayerische Staatsbrauerei Weihenstephan",
        address: "Freising, Germany",
        url: "weihenstephaner.de"
      },
      {
        name: "Bell's Brewery",
        address: "Kalamazoo, Michigan, United States",
        url: "bellsbeer.com"
      },
      {
        name: "Boston Beer Company",
        address: "Jamaica Plain, Massachusetts, United States",
        url: "samueladams.com"
      },
      {
        name: "Cigar City Brewing",
        address: "Tampa, Florida, United States",
        url: "cigarcitybrewing.com"
      },
      {
        name: "Coors Brewing Company",
        address: "Golden, Colorado, United States",
        url: "millercoors.com"
      },
      {
        name: "Dogfish Head Craft Brewery",
        address: "Milton, Delaware, United States",
        url: "dogfish.com"
      },
      {
        name: "Heineken Nederland B.V.",
        address: "Zoeterwoude, Netherlands",
        url: "heineken.com"
      },
      {
        name: "Lazy Magnolia Brewing Company",
        address: "Kiln, Mississippi, United States",
        url: "lazymagnolia.com"
      },
      {
        name: "Miller Brewing Co.",
        address: "Milwaukee,Wisconsin, United States",
        url: "millercoors.com"
      },
      {
        name: "Paulaner Brauerei",
        address: "München, Germany",
        url: "paulaner.de"
      },
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brewerys', null, {});
  }
};
