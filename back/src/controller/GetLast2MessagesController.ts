import { Request, Response } from 'express';
import { GetLast2MessagesService } from "../services/GetLast2MessagesService";


class GetLast2MessagesController {
    async handle(req: Request, res: Response) {

        const service = new GetLast2MessagesService();

        try {
            const result = await service.execute();

            return res.json(result)

        } catch (err) {
            return res.json({ error: err });
        }
    }
}

export { GetLast2MessagesController }