const { hash, compare } = require("bcryptjs")
const { sign } = require("jsonwebtoken")
const { APP_SECRET, getUserId } = require("../utils")

const securityResolvers = {
  Mutation: {
    signup: async (parent, { name, email, password }, context) => {
      const hashedPassword = await hash(password, 10)
      const user = await context.prisma.createUser({
        name,
        email,
        password: hashedPassword
      })
      return {
        token: sign({ userId: user.id }, APP_SECRET),
        user
      }
    },
    login: async (parent, { email, password }, context) => {
      const user = await context.prisma.user({ email })
      if (!user) {
        throw new Error(`No user found for email: ${email}`)
      }
      const passwordValid = await compare(password, user.password)
      if (!passwordValid) {
        throw new Error("Invalid password")
      }
      return {
        token: sign({ userId: user.id }, APP_SECRET),
        user
      }
    }
  }
}

module.exports = securityResolvers
