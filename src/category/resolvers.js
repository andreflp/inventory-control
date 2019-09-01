const categoryResolvers = {
  Query: {
    categories(root, args, context) {
      return context.prisma.categories()
    }
  },
  Mutation: {
    createCategory(root, args, context) {
      return context.prisma.createCategory({
        name: args.name
      })
    },
    updateCategory(root, args, context) {
      return context.prisma.updateCategory({
        where: { id: args.categoryId },
        data: { name: args.name }
      })
    },
    deleteCategory(root, args, context) {
      return context.prisma.deleteCategory({
        id: args.categoryId
      })
    }
  }
}

module.exports = categoryResolvers
