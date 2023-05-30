import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/user.controller";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";


const userRoutes = Router()

userRoutes.post("",ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
userRoutes.get("", listUserController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureDataIsValidMiddleware(userSchemaUpdate), updateUserController)
userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController)

export {userRoutes}