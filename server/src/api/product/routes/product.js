"use strict";

/**
 * product router.
 */
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/:slug",
      handler: "product.findUid",
    },
  ],
};

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::product.product");
