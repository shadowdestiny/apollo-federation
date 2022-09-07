const {PrismaClient} = require('../mariaDB/generated/client')
const prisma = new PrismaClient()


async function main() {

    const user = await prisma.user.createMany({
        data: [
            { id: 3, email: 'lrm2.programador@gmail.com', name: 'Luis' },
            { id: 4, email: 'info2@cualquiercosa.com', name: 'Lorem' },
        ]
    })
    console.log(user);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

