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
    },
    updateProduct(root, args, context) {
      const { productId, name, cod, price, supplierId, categoryId } = args
      return context.prisma.updateProduct({
        where: { id: productId },
        data: {
          name,
          cod,
          price,
          supplier: {
            connect: { id: supplierId }
          },
          category: {
            connect: { id: categoryId }
          }
        }
      })
    },
    deleteProduct(root, args, context) {
      return context.prisma.deleteProduct({
        id: args.productId
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
