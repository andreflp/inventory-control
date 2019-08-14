const categoryResolvers = require("../category/resolvers");
const productResolvers = require("../product/resolvers");
const supplierResolvers = require("../supplier/resolvers");
const securityResolvers = require("../security/resolvers");
const { merge } = require("lodash");

const resolvers = merge(
  categoryResolvers,
  productResolvers,
  supplierResolvers,
  securityResolvers
);

module.exports = resolvers;
