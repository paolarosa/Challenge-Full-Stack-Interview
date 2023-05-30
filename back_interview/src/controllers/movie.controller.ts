import { Request, Response } from "express"
import { createMovieService } from "../services/movies/createMovie.service"
import { listMoviesService } from "../services/movies/listMovie.service"
import { MovieUpdateRequest } from "../interfaces/movies.interfaces"
import { updateMovieService } from "../services/movies/updateMovie.service"
import { deleteMovieService } from "../services/movies/deleteMovie.service"


const createMovieController = async (req: Request, res: Response) => {
    const userId = res.locals.clientId
    const newMovie = await createMovieService(req.body, userId)
    return res.status(201).json(newMovie)
}

const listMovieController = async (req: Request, res: Response) => {
    const userId = res.locals.userId
    const movie = await listMoviesService(userId)
    return res.json(movie)
}

const updateMovieController = async (req: Request, res: Response) => {
    const movieId = req.params.id
    const updatedValues: MovieUpdateRequest = req.body
    const updateMovie = await updateMovieService(updatedValues, movieId)
    return res.json(updateMovie)
}

const deleteMovieController = async (req: Request, res: Response) => {
    const movieId = req.params.id
    await deleteMovieService(movieId)
    res.status(204).send()
}

export {createMovieController, listMovieController,updateMovieController, deleteMovieController}