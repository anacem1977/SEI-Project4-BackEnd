'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Substyles', [
      {
        styleId: 1,
        substyle: "Doppelbock",
        description: "Doppel meaning double, this style is a bigger and stronger version of the lower gravity German-style Bocks. Originally made by monks in Munich, this style is very food friendly, color is copper to dark brown. Malty sweetness is dominant. Malt character is more reminiscent of fresh and lightly toasted Munich-style malt.",
        abv: "6.6-7.9%",
        ibu: "17-27",
        glassware: "Tulip",
        pairing: "Pork or Ham, Strong Cheeses, German Chocolate Cake",
        flavor: "n/a",
        color: "12-30 SRM"
      },
      {
        styleId: 1,
        substyle: "Traditional",
        description: "Bottom fermenting lager that generally takes extra months of lagering (cold storage) to smooth out such a strong brew. Robust malt character with a dark amber to brown hue. Most are only lightly hopped",
        abv: "6.3-7.6%",
        ibu: "20-30",
        glassware: "Tulip",
        pairing: "Aged Swiss Cheese, Grilled Rib-Eye, Chocolate",
        flavor: "Hop flavor is low",
        color: "20-30 SRM"
      },
      {
        styleId: 2,
        substyle: "American",
        description: "Roasted malt, caramel-like abd chocolate-like characters should be of medium intensity in both flavor and aoma. This style has evident low to medium hop flavor and aroma and medium to high hop bitterness",
        abv: "4.2-8.8%",
        ibu: "25-45",
        glassware: "Pint Glass",
        pairing: "Citric Salads, Thai Food, Hamburgers, Crab Cakes, Mexican Food",
        flavor: "Bitter",
        color: "5-14 SRM"
      },
      {
        styleId: 2,
        substyle: "English",
        description: "Toasty, robust and with a bit of chocolate maltiness. This style's varieties will not be as hoppy as their American counterparts.",
        abv: "4.2-7.0%",
        ibu: "15-25",
        glassware: "Pint Glass",
        pairing: "Roasted Pork, Steak Nuts, Aged Gouda",
        flavor: "Malt",
        color: "12-17 SRM"
      },
      {
        styleId: 3,
        substyle: "Light",
        description: "The Light Lager is generally a lighter version of a brewery's premium lager, some are lower in alcohol but all are lower in calories and carbohydrates compared to other beers. Typically a high amount of cereal adjuncts like rice or corn are used to help lighten the beer as much as possible",
        abv: "2.5-5.0%",
        ibu: "8-12",
        glassware: "Pilsner Glass",
        pairing: "Cheese, Steak, Creamy Pasta, Fried Fish",
        flavor: "Clean",
        color: "5-14 SRM"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Substyles', null, {});
  }
};
