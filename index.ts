import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

(async () => {
    const resp = await prisma.person.create({
        data: {
            name: "5",
            lastname: "yes",
            //age: 5,
        }
    })
    console.log(resp)
})();