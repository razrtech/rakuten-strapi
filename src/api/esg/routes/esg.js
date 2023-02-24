'use strict';

/**
 * esg router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::esg.esg');
