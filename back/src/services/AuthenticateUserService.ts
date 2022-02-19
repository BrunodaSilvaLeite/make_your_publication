import PrismaClient from "../prisma/index";
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs";

interface IUser {
    password: string ;
    email: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IUser) {


        const users = await PrismaClient.user.findFirst({
            where:
            {
                email
            },
            
        });
        
        if (!users) {
            return("Email or Password incorrect!");
        }

        const passwordMatch = await compare(password, users.password)

        if (!passwordMatch) {
            return("Email or Password incorrect!");
        }

        const token = sign(
            {
          
             email: users.email,
              
            },
            `${process.env.JWT_SECRET}`,
            {
                subject: users.id,
                expiresIn: "1d"
            }
        );
   
        users.password = ""
        
        return {token, users }
    }
}

export { AuthenticateUserService };