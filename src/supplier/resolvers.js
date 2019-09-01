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
    },
    updateSupplier(root, args, context) {
      return context.prisma.updateSupplier({
        where: { id: args.supplierId },
        data: {
          name: args.name,
          address: args.address,
          email: args.email,
          registry: args.registry
        }
      })
    },
    deleteSupplier(root, args, context) {
      return context.prisma.deleteSupplier({
        id: args.supplierId
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
