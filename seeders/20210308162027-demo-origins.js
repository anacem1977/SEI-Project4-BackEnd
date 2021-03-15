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
        {
          origin: "UK",
          style: "Dark Ale",
          description: "Ale is a type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste. Historically, the term referred to a drink brewed without hops."
        },
        {
          origin: "Germany",
          style: "Dark Lager",
          description: "Dark lagers range from amber to dark reddish brown, and may be termed Vienna, amber lager, Dunkel, tmavé, or Schwarzbier depending on region, color or brewing method."
        },
        {
          origin: "UK",
          style: "India Pale Ale",
          description: "India pale ale (IPA) is a hoppy beer style within the broader category of pale ale. This style was widespread in England and would grow in popularity, notably as an export beer shipped to India and elsewhere."
        },
        {
          origin: "UK",
          style: "Strong Ale",
          description: "Strong ale is a type of ale, usually above 5% abv and often higher, between 7% to 11% abv, which spans a number of beer styles, including old ale, barley wine and Burton ale."
        },
        {
          origin: "Germany",
          style: "Wheat",
          description: "Wheat beer is a top-fermented beer which is brewed with a large proportion of wheat relative to the amount of malted barley."
        },
        {
          origin: "UK",
          style: "Stout",
          description: "Stout is a dark, top-fermented beer with a number of variations, including dry stout, oatmeal stout, milk stout, and imperial stout."
        },
        {
          origin: "UK",
          style: "Pale Ale",
          description: "Top-fermented beer made with malts dried with high-carbon coke, which resulted in a lighter colour than other beers popular at that time. Different brewing practices and hop levels have resulted in a range of tastes and strengths within the pale ale family."
        },
        {
          origin: "UK",
          style: "Porter",
          description: "The original porter was born in the 1700s, supposedly the result of blending old (as in stale or sour), new (brown ale), and mild beers so as to make something palatable."
        },
    ], 
     {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Origins', null, {});
  }
};
