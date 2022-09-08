const { PrismaClient } = require('../mariaDB/generated/client')
const prisma = new PrismaClient()

const users = [
    {
        id: "1",
        name: "Ada Lovelace",
        birthDate: "1815-12-10",
        username: "@ada"
    },
    {
        id: "2",
        name: "Alan Turing",
        birthDate: "1912-06-23",
        username: "@complete"
    }
];


const resolvers = {
    Query: {
        me: () => {
            // return users
            return prisma.user.findMany()
        },
        getAllUsers: () => {
            return prisma.user.findMany()
        },
        totalPosts: () => 100
    },
    /*User: {
        __resolveReference(object) {
            console.log(object, "objeto")
            return users.find(user => user.id === object.id);
            /!*return prisma.user.findMany({
                where:{
                    email: object.email
                }
            })*!/
        }

        __resolveReference(user, { prisma }){
            // user will always have at least the `id` and the `__typename` here
            return prisma.user.findUnique({
                id: user.id
            })
        }
    },*/
    Post: {
        user(post) {
            console.log("mostrando post", post)
            return prisma.user.findUnique({
                where: {
                    id: parseInt(post.user_id)
                }
            })
        }
    }
}




module.exports = { resolvers }
