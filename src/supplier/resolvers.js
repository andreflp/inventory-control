const supplierResolvers = {
  Query: {
    suppliers(root, args, context) {
      return context.prisma.suppliers()
    }
  },
  Mutation: {
    createSupplier(root, args, context) {
      return context.prisma.createSupplier({
        name: args.name,
        address: args.address,
        email: args.email,
        registry: args.registry
      })
    }
  },
  Supplier: {
    products(root, args, context) {
      return context.prisma
        .supplier({
          id: root.id
        })
        .products()
    }
  }
}

module.exports = supplierResolvers
