import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createTokenController } from "../controllers/login.controller";

const loginRoutes = Router()

loginRoutes.post("",createTokenController)

export {loginRoutes}