import { Router } from "express";
import { santizeUserInput, findAll, findOne, add, update, remove } from "./user.controler.js";
export const userRouter = Router();
userRouter.get('/', findAll);
userRouter.get('/:id', findOne);
userRouter.post('/', santizeUserInput, add);
userRouter.put('/:id', santizeUserInput, update);
userRouter.delete('/:id', remove);
//# sourceMappingURL=user.routes.js.map