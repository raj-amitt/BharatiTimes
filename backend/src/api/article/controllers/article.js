"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  // Default `find` method for retrieving all articles
  async find(ctx) {
    const { category } = ctx.query; // Get the category from query parameters

    let filters = {}; 

    if (category) {
      // If a category filter is provided, add it to the filters object
      filters.category = category;
    }

    const entities = await strapi.entityService.findMany(
      "api::article.article",
      {
        filters: filters, // Apply filters
        populate: ["coverImage"], // Add any relations you need to populate
      }
    );

    return (ctx.body = entities);
  },

  // Custom method to filter articles by category
  async filterByCategory(ctx) {
    const { category } = ctx.params; // Get category from the URL parameters

    const entities = await strapi.entityService.findMany(
      "api::article.article",
      {
        filters: { category }, // Filter by the provided category
        populate: ["coverImage"], // Add relations as necessary
      }
    );

    return (ctx.body = entities);
  },

  // `findOne` method for retrieving a single article by ID
  async findOne(ctx) {
    const { id } = ctx.params;

    if (isNaN(parseInt(id, 10))) {
      return ctx.badRequest("Invalid article ID");
    }

    const entity = await strapi.entityService.findOne(
      "api::article.article",
      id,
      {
        populate: ["coverImage"], // Add relations as necessary
      }
    );

    if (!entity) {
      return ctx.notFound();
    }

    return (ctx.body = entity);
  },
}));
