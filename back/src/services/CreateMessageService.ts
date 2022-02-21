import PrismaClient from "../prisma"

class CreateMessageService {
    async execute(text: string, user_id: string) {

        let user = await PrismaClient.user.findFirst({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                email: true,
                name: true,
                image: true
              },
        });

        const message = await PrismaClient.message.create({
            data: {
                text,
                user_id
            },  
           
        });

        return {message, user}
    }

}

export { CreateMessageService };