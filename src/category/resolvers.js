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
    }
  }
}

module.exports = categoryResolvers
