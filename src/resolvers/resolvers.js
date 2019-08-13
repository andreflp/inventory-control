const categoryResolvers = require("../category/resolvers")
const productResolvers = require("../product/resolvers")
const supplierResolvers = require("../resolvers/resolvers")
const { merge } = require("lodash")

const resolvers = merge(categoryResolvers, productResolvers, supplierResolvers)

module.exports = resolvers
