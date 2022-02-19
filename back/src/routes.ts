import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateUserController } from "./controller/CreateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast2MessagesController } from "./controller/GetLast2MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";

const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthenticateUserController().handle);
router.post("/message",ensureAuthenticated, new CreateMessageController().handle);
router.get("/messages/last2", new GetLast2MessagesController().handle);
router.get("/profile",ensureAuthenticated, new ProfileUserController().handle);
export { router }; 