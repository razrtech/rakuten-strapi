'use strict';

/**
 * esg service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::esg.esg');
