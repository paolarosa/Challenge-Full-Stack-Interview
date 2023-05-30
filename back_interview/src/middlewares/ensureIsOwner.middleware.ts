import {Request, Response, NextFunction} from "express"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities/movie.entitie"


const ensureIsOwnerMiddleware = async (req:Request, res:Response, next:NextFunction) =>{
    const movieRepository = AppDataSource.getRepository(Movie)
    const movieId: string = req.params.id
    const userId: string = res.locals.userId

    const movie = await movieRepository.findOne({
    where: {
        id: movieId
    },
    relations: {
        user: true
    }
    })

    if(!movie){
        return res.status(404).json({
            message: "Movie not found"
        })
    }
    if(movie.user.id !== userId){
        return res.status(403).json({
            message: "You don't have permissions"
        })
    }
    return next()
}
export {ensureIsOwnerMiddleware}