const productResolvers = {
  Query: {
    products(root, args, context) {
      return context.prisma.products()
    }
  },
  Mutation: {
    createProduct(root, args, context) {
      return context.prisma.createProduct({
        name: args.name,
        cod: args.cod,
        price: args.price,
        supplier: {
          connect: { id: args.supplierId }
        },
        category: {
          connect: { id: args.categoryId }
        }
      })
    }
  },
  Product: {
    supplier(root, args, context) {
      return context.prisma
        .product({
          id: root.id
        })
        .supplier()
    },
    category(root, args, context) {
      return context.prisma
        .product({
          id: root.id
        })
        .category()
    }
  }
}

module.exports = productResolvers
