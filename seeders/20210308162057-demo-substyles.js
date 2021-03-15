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
        flavor: "Hop flavor and bitterness are low",
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
      {
        styleId: 1,
        substyle: "Maibock",
        description: "Also called “Heller Bock” (meaning “Pale Bock”), the German-Style Maibock is paler in color and more hop-centric than traditional Bock beers. A lightly toasted and/or bready malt character is often evident.",
        abv: "6.3-8.1%",
        ibu: "20-38",
        glassware: "Goblet (or Chalice)",
        pairing: "Swiss Cheese, Ham, White Chocolate Cheesecake",
        flavor: "Low bitterness",
        color: "4-9 SRM"
      },
      {
        styleId: 1,
        substyle: "Eisbock",
        description: "Eisbock is an extremely strong beer with a typical alcohol content well beyond 7 percent ABV. Eisbock can range from near black to as light as tawny red. Hop bitterness and flavor are mostly cast aside with a big alcohol presence replacing it, which can range from sweet to spicy, and fruity to fusel. Look for a heavy or almost syrupy body with tons of malty flavor.",
        abv: "7.0-14.0%",
        ibu: "25-35",
        glassware: "Snifter",
        pairing: "n/a",
        flavor: "n/a",
        color: "n/a"
      },
      {
        styleId: 1,
        substyle: "Weizenbock",
        description: "The German-style Weizenbock is a wheat version of a German-Style Bock, or a bigger and beefier Dunkelweizen. Malt mellanoidins and Weizen Ale yeast are the star ingredients. If served with yeast, the appearance may appropriately be very cloudy.",
        abv: "7.0-9.5%",
        ibu: "15-35",
        glassware: "Tulip",
        pairing: "Manchego Cheese, Chicken and Dumplings, Banana Bread",
        flavor: "Medium malty sweetness.",
        color: "4.5-30 SRM"
      },
      {
        styleId: 2,
        substyle: "Belgian Dark",
        description: "Belgian Darks offer a massive range of characters. The colors play within the amber to light brown and even deep garnet range of hues, topped with thick, rocky heads of great retention. Most examples of Belgian Dark Ale have a low level of bitterness.",
        abv: "4.5-7.5%",
        ibu: "15-55",
        glassware: "Goblet (or Chalice)",
        pairing: "n/a",
        flavor: "n/a",
        color: "n/a"
      },
      {
        styleId: 4,
        substyle: "Scottish",
        description: "Scottish-Style Ales vary depending on strength and flavor, but in general retain a malt-forward character with some degree of caramel-like malt flavors and a soft and chewy mouthfeel. The numbers commonly associated with brands of this style (60/70/80 and others) reflect the Scottish tradition of listing the cost, in shillings, of a hogshead (large cask) of beer.",
        abv: "2.8-5.3%",
        ibu: "9-25",
        glassware: "Tulip",
        pairing: "n/a",
        flavor: "n/a",
        color: "n/a"
      },
      {
        styleId: 5,
        substyle: "American Amber / Red",
        description: "A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character. Hop bitterness can range from very low to medium-high. Brewers may use decoction mash and dry-hopping to achieve advanced flavors.",
        abv: "4.8-5.4%",
        ibu: "18-30",
        glassware: "Tulip",
        pairing: "White Cheddar Cheese, Grilled Meats and Vegetables, Fruit Desserts",
        flavor: "Hop bitterness is very low to medium-high.",
        color: "6-14 SRM"
      },
      {
        styleId: 5,
        substyle: "Vienna",
        description: "Named after the city in which it originated, a traditional Vienna Lager is brewed using a three step decoction boiling process. Munich, Pilsner, Vienna, and dextrin malts are used, as well wheat in some cases. Its color reliably falls between pale amber and medium amber—there should be a reddish hue to examples of this style.",
        abv: "4.5-5.5%",
        ibu: "15-30",
        glassware: "Pilsner Glass",
        pairing: "Mild Cheeses, Grilled Meats and Vegetables, Almond Biscotti",
        flavor: "Malt flavor is slightly sweet.",
        color: "12-26 SRM"
      },
      {
        styleId: 6,
        substyle: "Imperial",
        description: "A stronger version of the American IPA, which boasts even more hoppy flavor, aroma an bitterness.",
        abv: "7.0-12.0%",
        ibu: "65-100",
        glassware: "Tulip",
        pairing: "Rich Cheeses, Pork Chops, Carrot Cake",
        flavor: "Hop flavor and aroma are very high.",
        color: "2-9 SRM"
      },
      {
        styleId: 6,
        substyle: "American",
        description: "More flavorful and aromatic than the withering English IPA, its color can range from very pale golden to reddish amber. Hops are the star here, and those used in the style tend to be American with an emphasis on herbal, piney, and/or fruity (especially citrusy) varieties. Medium bodied with a clean, bready, and balancing malt backbone, the American IPA has become a dominant force in the marketplace, influencing brewers and beer cultures worldwide.",
        abv: "5.5-7.5%",
        ibu: "50-70",
        glassware: "Tulip",
        pairing: "Blue Cheeses, Tuna, Rice Pudding",
        flavor: "Hop bitterness is medium high to very high.",
        color: "6-14 SRM"
      },
      {
        styleId: 6,
        substyle: "English",
        description: "A stronger version of a pale ale, characterized by a English hop (earthy, floral) and increased alcohool content. Different from its American counterpart, this style strikes a balance between malt and hops for a more rounded flavor.",
        abv: "4.5-7.0%",
        ibu: "35-60",
        glassware: "Pint Glass",
        pairing: "Aged Cheddar, Creamy Pasta, Ginger Spice Cake",
        flavor: "Hop flavor and bitterness is medium to high.",
        color: "6-14 SRM"
      },
      {
        styleId: 3,
        substyle: "Adjunct",
        description: "Light bodied, pale, fizzy lagers made popular by the large macro-breweries (large breweries) of America after Prohibition. Low bitterness, thin malts, and moderate alcohol. Focus is less on flavor and more on mass-production and consumption, cutting flavor and sometimes costs with adjunct cereal grains, like rice and corn.",
        abv: "4.0-6.0%",
        ibu: "8-18",
        glassware: "Pilsner Glass",
        pairing: "n/a",
        flavor: "n/a",
        color: "n/a"
      },
      {
        styleId: 3,
        substyle: "Pilsner German",
        description: "A classic German-style Pilsner is straw to pale in color with a malty sweetness that can be perceived in aroma and flavor. Perception of hop bitterness is medium to high. Noble-type hop aroma and flavor are moderate and quite obvious. Distinctly different from the Bohemian-style pilsner, this style is lighter in color and body and has a lower perceived hop bitterness.",
        abv: "4.6-5.3%",
        ibu: "25-40",
        glassware: "Flute",
        pairing: "White Cheddar, Shelfish, Chicken, Saldas, Shortbread cookies",
        flavor: "Hop bitterness is medium to high",
        color: "3-4 SRM"
      },
      {
        styleId: 5,
        substyle: "Munich Dunkel",
        description: "An old friend of Bavaria, Munich Dunkels are smooth, rich, and complex without being overly heady or heavy. They boast brilliant ruby hues from the large amounts of Munich malts used, and these malts also create a fuller-bodied beer. In addition, the decoction brewing process lends much depth and richness of flavor.",
        abv: "4.0-6.0%",
        ibu: "15-25",
        glassware: "Pilsner Glass",
        pairing: "Washed-Rind Munster Cheese, Sausages, Roasted Vegetables, Beer Cake",
        flavor: "Malt aroma is low to medium",
        color: "15-17 SRM"
      },
      {
        styleId: 3,
        substyle: "Pilsner Bohemian/Czech",
        description: "This style originated in 1842, with “pilsener” originally indicating an appellation in the Czech Republic. Classic examples of this style used to be conditioned in wooden tanks and had a less sharp hop bitterness despite the similar IBU ranges to German-style Pilsener. Bohemian-Style Pilseners are darker in color and higher in final gravity than their German counterparts.",
        abv: "4.1-5.1%",
        ibu: "30-45",
        glassware: "Pilsner Glass",
        pairing: "Mild White Cheddar, Shellfish, Chicken, Salads, Shortbread cookies",
        flavor: "Toasted, biscuit-like and/or bready malt flavors.",
        color: "3-7 SRM"
      },
      {
        styleId: 3,
        substyle: "European Pale",
        description: "Similar to Munich Helles, many European countries reacted to the popularity of early pale lagers by brewing their own. Hop flavor is significant and of noble varieties, bitterness is moderate, and both are backed by a solid malt body and sweet notes from an all-malt base.",
        abv: "4.0-6.0%",
        ibu: "18-25",
        glassware: "Pilsner Glass",
        pairing: "Chèvre Cheese, Grilled Steack, Bread Pudding",
        flavor: "Hop biterness is medium",
        color: "3-6 SRM"
      },
      {
        styleId: 7,
        substyle: "Belgian Pale",
        description: "Like a Belgian Pale Ale, the strong versions will also be pale straw to deep golden in color. What sets them apart is a much higher alcohol content that can range from deliciously hidden to devastatingly present. Expect a complex and powerful ale, yet delicate with rounded flavors and a big, billowy, rocky, white head.",
        abv: "7.0-12.0%",
        ibu: "20-40",
        glassware: "Goblet (or Chalice)",
        pairing: "Triple Creme Cheese, Beer Battered Fried Shrimp, Baklava",
        flavor: "Hop biterness is medium-low to medium-high",
        color: "3.5-10 SRM"
      },
      {
        styleId: 3,
        substyle: "American",
        description: "American lager has little in the way of hop and malt character. A straw to gold, very clean and crisp, highly carbonated lager. Hop aroma and flavor are low to medium-low, deriving from noble-type hops. Hop bitterness is medium. Toasted, biscuit-like, and/or bready malt flavors along with low levels of fermented-malt-derived sulfur compounds may be evident.",
        abv: "4.1-5.1%",
        ibu: "30-45",
        glassware: "Pilsner Glass",
        pairing: "Smear Ripened Cheeses, Pho, Kettle Corn Balls",
        flavor: "Low hop aroma/flavor",
        color: "2-4 SRM"
      },
      {
        styleId: 8,
        substyle: "Witbier",
        description: "Belgian in origin, this unfiltered style of ale is pale and cloudy in appearance due to the high level of wheat, and sometimes oats, used in the mash. Often referred to as 'white beers' (witbieren) due to the cloudiness created by yeast in suspension.",
        abv: "4.0-7.0%",
        ibu: "10-20",
        glassware: "Tulip",
        pairing: "Mascarpone Cheese, Moules and Frites, Panna Cotta",
        flavor: "Hop bitterness is low",
        color: "2-4 SRM"
      },
      {
        styleId: 9,
        substyle: "Irish Dry",
        description: "Dry Stout is black beer with a dry-roasted character thanks to the use of roasted barley. The emphasis on coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character. This beer is often dispensed via nitrogen gas taps that lend a smooth, creamy body to the palate.",
        abv: "4.2-5.3%",
        ibu: "30-40",
        glassware: "Pint Glass",
        pairing: "Irish Cheddar, Oysters, Ham, Chocolate desserts",
        flavor: "Hop bitterness is medium to medium high.",
        color: "40+ SRM"
      },
      {
        styleId: 8,
        substyle: "Dunkelweizen",
        description: "Similar to a Hefeweizen, these southern German wheat beers are brewed as darker versions (Dunkel means 'dark'). Creamy and full-bodied, most Dunkelweizen are medium amber to amber-brown and appear slightly murky from the weizen yeast.",
        abv: "4.0-7.0%",
        ibu: "10-15",
        glassware: "Weizen Glass",
        pairing: "Gouda Cheese, Roasted Chicken, Banana Cream Pie",
        flavor: "Hop bitterness is low.",
        color: "10-25 SRM"
      },
      {
        styleId: 3,
        substyle: "Helles",
        description: "“Helles” means “pale in color,” as these beers are often golden. The German-style Helles lager is a bit rounder or fuller-bodied than light lager and even all-malt pilsners. Clean and crisp, this is a refreshing beer with substance.",
        abv: "4.8-5.6%",
        ibu: "18-25",
        glassware: "Flute",
        pairing: "Colby Cheese, Samosas, Baklava",
        flavor: "Hop flavor and bitterness are very low to low.",
        color: "4-5.5 SRM"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Substyles', null, {});
  }
};
