import {z} from "zod"
import { DeepPartial} from "typeorm"
import { movieSchema, movieSchemaRequest, movieSchemaResponse, moviesSchemaResponse } from "../schemas/movies.schema"

type MovieRequest = z.infer<typeof movieSchemaRequest>
type Movie = z.infer<typeof movieSchema>
type MovieResponse = z.infer<typeof movieSchemaResponse>
type MoviesResponse = z.infer<typeof moviesSchemaResponse>
type MovieUpdateRequest = DeepPartial<MovieRequest>

export { Movie, MovieRequest, MovieResponse, MoviesResponse, MovieUpdateRequest }