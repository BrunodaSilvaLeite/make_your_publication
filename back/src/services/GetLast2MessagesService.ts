import PrismaClient from "../prisma"


class GetLast2MessagesService {
    async execute() {
      const messages = await PrismaClient.message.findMany({
          take: 2,
          orderBy: {
              created_at: "desc",
          }, 
          include: {
              user:true
          }
       
      });
      messages.forEach(message => {
          message.user.password = "";
      })
      return messages;
    }
}

export {GetLast2MessagesService}