'use strict';

/**
 * vendeur service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendeur.vendeur');
