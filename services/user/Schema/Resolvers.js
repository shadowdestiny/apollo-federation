const { PrismaClient } = require('../mariaDB/generated/client')
const prisma = new PrismaClient()


const resolvers = {
    Query: {
        me: () => {
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
    },

    Mutation: {
        insertUser(object, {name, email}) {
            return prisma.user.create({
                data: {
                    name,
                    email
                }
            })
        }
    }
}




module.exports = { resolvers }
