import { Router } from "express"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware"
import { movieSchemaRequest, movieSchemaUpdate } from "../schemas/movies.schema"
import { createMovieController, deleteMovieController, listMovieController, updateMovieController } from "../controllers/movie.controller"

const movieRoutes = Router()

movieRoutes.use(ensureAuthMiddleware)

movieRoutes.post("", ensureDataIsValidMiddleware(movieSchemaRequest), createMovieController)
movieRoutes.get("", listMovieController)
movieRoutes.patch("/:id", ensureAuthMiddleware, ensureDataIsValidMiddleware(movieSchemaUpdate), updateMovieController)
movieRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteMovieController)

export { movieRoutes }