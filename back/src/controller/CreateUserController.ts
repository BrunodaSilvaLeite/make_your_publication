import { CreateUserServices } from "../services/CreateUserServices";
import { Request, Response } from 'express';

class CreateUserController {
    async handle(req: Request, res: Response) {
       ;
        const { name, email, password,image } = req.body;
        
        const service = new CreateUserServices();

        const user = await service.execute({ name, email, password, image });

        return res.json(user);

    }
}

export { CreateUserController }