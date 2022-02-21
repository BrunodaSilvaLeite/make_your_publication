import PrismaClient from "../prisma"


class ProfileUserService {
    async execute(user_id: string){
      const user = await PrismaClient.user.findFirst({
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
      
      return user;
    }
    
}

export {ProfileUserService}