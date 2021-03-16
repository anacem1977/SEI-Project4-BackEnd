'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Breweries", [
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

      {
        name: "Cervecería Cuauhtémoc Moctezuma, S.A. de C.V.",
        address: "Monterrey, Nuevo León, México",
        url: "cuauhtemoc.com"
      },
      {
        name: "Spoetzl Brewery",
        address: "Shiner, Texas, United States",
        url: "shiner.com"
      },
      {
        name: "Tröegs Brewing Company",
        address: "Hershey, Pennsylvania, United States",
        url: "troegs.com"
      },
      {
        name: "Spaten-Franziskaner-Bräu",
        address: "München, Germany",
        url: "franziskaner-weissbier.de"
      },
      {
        name: "Rogue Ales",
        address: "Newport, Oregon, United States",
        url: "rogue.com"
      },
      {
        name: "Hofbräuhaus München",
        address: "München, Germany",
        url: "hofbraeuhaus.de"
      },
      {
        name: "Schneider Weisse G. Schneider & Sohn",
        address: "Kelheim, Germany",
        url: "schneider-weisse.de"
      },
      {
        name: "Kuhnhenn Brewing Company",
        address: "Warren, Michigan, United States",
        url: "kbrewery.com"
      },
      {
        name: "Kulmbacher Brauerei AG",
        address: "Kulmbach, Germany",
        url: "kulmbacher.de"
      },
      {
        name: "Vancouver Island Brewing",
        address: "Victoria, British Columbia, Canada",
        url: "vibrewing.com"
      },
      {
        name: "Victory Brewing Company",
        address: "Downington, Pennsylvania, United States",
        url: "victorybeer.com"
      },
      {
        name: "Sierra Nevada Brewing Co.",
        address: "Chico, California, United States",
        url: "sierranevada.com"
      },
      {
        name: "Samuel Smith Old Brewery",
        address: "Tadcaster, England, United Kingdom",
        url: "samuelsmithsbrewery.co.uk"
      },
      {
        name: "Goose Island Beer Co.",
        address: "Chicago, Illinois, United States",
        url: "gooseisland.com"
      },
      {
        name: "Abbaye de Leffe S.A.",
        address: "Dinant, Belgium",
        url: "abbaye-de-leffe.be"
      },
      {
        name: "Unibroue",
        address: "Chambly, Quebec, Canada",
        url: "unibroue.com"
      },
      {
        name: "River Horse Brewing Co.",
        address: "Ewing, New Jersey, United States",
        url: "riverhorse.com"
      },
      {
        name: "Ithaca Beer Company",
        address: "Ithaca, New York, United States",
        url: "ithacabeer.com"
      },
      {
        name: "Brouwerij St. Bernardus NV",
        address: "Watou, Belgium",
        url: "sintbernardus.be"
      },
      {
        name: "3 Floyds Brewing Co.",
        address: "Munster, Indiana, United States",
        url: "3floyds.com"
      },
      {
        name: "Belhaven Brewery Company Ltd.",
        address: "Dunbar, Scotland, United Kingdom",
        url: "belhaven.co.uk"
      },
      {
        name: "Odell Brewing Company",
        address: "Fort Collins, Colorado, United States",
        url: "odellbrewing.com"
      },
      {
        name: "Innis & Gunn",
        address: "Edinburgh, Scotland, United Kingdom",
        url: "innisandgunn.com"
      },
      {
        name: "Brooklyn Brewery",
        address: "Brooklyn, New York, United States",
        url: "brooklynbrewery.com"
      },
      {
        name: "Stella Artois",
        address: "Leuven, Belgium",
        url: "stellaartois.be"
      },
      {
        name: "Sapporo Breweries Ltd.",
        address: "Tokyo, Japan",
        url: "sapporobeer.jp"
      },
      {
        name: "Guinness Ltd.",
        address: "Dublin, Ireland",
        url: "guinness.com"
      },
      {
        name: "Cervejarias Reunidas Skol-Caracu",
        address: "São Paulo, Brazil",
        url: "skol.com.br"
      },
      {
        name: "Harbin Brewery Group",
        address: "Harbin, Xiangfang, China",
        url: "--"
      },
      {
        name: "Beijing Yanjing Beer Group Corporation",
        address: "Beijing, China",
        url: "yanjing.com.cn"
      },
      {
        name: "Hijos De Rivera, S.A.",
        address: "La Coruña, Spain",
        url: "estrellagalicia.es"
      },
      {
        name: "Mahou, S.A.",
        address: "Madrid, Spain",
        url: "mahou.com"
      },
      {
        name: "Sociedade Central de Cervejas",
        address: "Vialonga, Portugal",
        url: "centralcervejas.pt"
      },
      {
        name: "Companhia Cervejaria Brahma",
        address: "São Paulo, Brazil",
        url: "brahma.com.br"
      },
      {
        name: "Erdinger Weissbräu",
        address: "Erding, Germany",
        url: "erdinger.de"
      },
      {
        name: "Amstel Brouwerij B. V.",
        address: "Amsterdam, Netherlands",
        url: "amstel.com"
      },
      {
        name: "Brouwerij Duvel Moortgat NV",
        address: "Breendonk-Puurs, Belgium",
        url: "duvel.be"
      },
      {
        name: "Brouwerij Huyghe",
        address: "Melle, Belgium",
        url: "delirium.be"
      },
      {
        name: "Carlsberg Danmark A/S",
        address: "København, Denmark",
        url: "carlsbergdanmark.dk"
      },
      {
        name: "Brasseries Kronenbourg",
        address: "Obernai, France",
        url: "kronenbourg.com"
      },
      {
        name: "Cervecería y Maltería Quilmes / Grupo Bemberg",
        address: "Buenos Aires, Argentina",
        url: "quilmes.com.ar"
      },
      {
        name: "Grupo Modelo S.A. de C.V.",
        address: "Ciudad de México, México",
        url: "gmodelo.mx"
      },
      {
        name: "Yuengling Brewery",
        address: "Pottsville.Pennsylvania, United States",
        url: "yuengling.com"
      },
      {
        name: "Blue Point Brewing Company",
        address: "Patchogue, New York, United States",
        url: "bluepointbrewing.com"
      },
      {
        name: "Ballast Point Brewing Company",
        address: "San Diego, California, United States",
        url: "ballastpoint.com"
      },
      {
        name: "Stone Brewing",
        address: "Escondido, California, United States",
        url: "stonebrewing.com"
      },
      {
        name: "Tsingtao Brewery Co., Ltd.",
        address: "Qingdao, China",
        url: "tsingtaobeer.com"
      },
      {
        name: "Brauerei Beck & Co.",
        address: "Bremen, Germany",
        url: "becks.de"
      },
      {
        name: "Fuller's",
        address: "London, England, United Kingdom",
        url: "fullers.co.uk"
      },
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Breweries', null, {});
  }
};
