const {PrismaClient} = require('../../mariaDB/generated/client')
const prisma = new PrismaClient()



async function main() {

    const posts = await prisma.post.createMany({
        data: [
            { title: 'Titulo 2', content: 'Este es el primer post', user_id: 1 },
            { title: 'Titulo 3', content: 'Este es el primer post 3', user_id: 1},
            { title: 'Titulo 4', content: 'Este es el primer post 4', user_id: 2 },
        ]
    })
    console.log(posts);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

