"use strict";

/**
 * category router.
 */
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/categories/:slug",
      handler: "category.findUid",
    },
  ],
};

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::category.category");
