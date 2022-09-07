import { PrismaClient } from '../mariaDB/generated/client'
const prisma = new PrismaClient()



async function main() {

    const user = await prisma.user.createMany({
        data: [
            { id: 1, email: 'lrm.programador@gmail.com', name: 'Luis' },
            { id: 2, email: 'info@cualquiercosa.com', name: 'Lorem' },
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

