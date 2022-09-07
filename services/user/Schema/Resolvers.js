const { PrismaClient } = require('../mariaDB/generated/client')
const prisma = new PrismaClient()

const resolvers = {
    Query: {
        getAllUsers: () => {
            return prisma.user.findMany()
        },
        totalPosts: () => 100
    }
}

module.exports = { resolvers }
