import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from 'cors'
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { loginRoutes } from "./routes/login.route"
import { userRoutes } from "./routes/user.route"
import { movieRoutes } from "./routes/movie.route"



const app = express()
app.use(cors())
app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/movies", movieRoutes)

app.use(handleAppErrorMiddleware)
export default app