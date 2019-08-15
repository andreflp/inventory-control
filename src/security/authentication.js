const { rule, and, shield } = require("graphql-shield")
const { getUserId } = require("../utils")

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    console.log(userId)
    return Boolean(userId)
  })
}

const permissions = shield({
  Query: {
    products: rules.isAuthenticatedUser,
    suppliers: rules.isAuthenticatedUser,
    categories: rules.isAuthenticatedUser
  },
  Mutation: {
    createProduct: rules.isAuthenticatedUser,
    createCategory: rules.isAuthenticatedUser,
    createSupplier: rules.isAuthenticatedUser,
    updateProduct: rules.isAuthenticatedUser,
    updateCategory: rules.isAuthenticatedUser,
    updateSupplier: rules.isAuthenticatedUser,
    deleteProduct: rules.isAuthenticatedUser,
    deleteCategory: rules.isAuthenticatedUser,
    deleteSupplier: rules.isAuthenticatedUser
  }
})

module.exports = permissions
