const { PrismaClient } = require('../mariaDB/generated/client')
const prisma = new PrismaClient()

const resolvers = {
    Query: {
        posts: () => {
            return prisma.post.findMany({

            })
        }
    },

    User: {
        posts(user) {
            const post = prisma.post.findMany({
               where: {
                  user_id: parseInt(user.id)
               }
            })
            return post;
        }
    },
}


const usernames = [
    { id: "1", username: "@ada" },
    { id: "2", username: "@complete" }
];
const reviews = [
    {
        id: "1",
        authorID: "1",
        product: { upc: "1" },
        body: "Love it!"
    },
    {
        id: "2",
        authorID: "1",
        product: { upc: "2" },
        body: "Too expensive."
    },
    {
        id: "3",
        authorID: "2",
        product: { upc: "3" },
        body: "Could be better."
    },
    {
        id: "4",
        authorID: "2",
        product: { upc: "1" },
        body: "Prefer something else."
    }
];


module.exports = { resolvers }
