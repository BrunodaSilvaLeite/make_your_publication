import prismaClient from "../prisma"
import { hash } from "bcryptjs";

type User = {
    name: string;
    email: string;
    password: string;
    image: string;
}

class CreateUserServices {
    async execute({ name, email, password, image }: User) {
      
        let user = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
           
        });

        let passwordHash = await hash(password, 8);

        if (user) {
            return(`User already exists`);

        }
        user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                image: image
            }
        });
        
        user.password = "";
        return user;
    }
}

export { CreateUserServices };