import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { MovieRequest, MovieUpdateRequest } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities/movie.entitie";
import { movieSchema } from "../../schemas/movies.schema";


const updateMovieService = async (data: MovieUpdateRequest, movieId: string): Promise<MovieRequest> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const oldMovie: Movie | null = await movieRepository.findOneBy({id: movieId})

    if (!oldMovie) {
        throw new AppError("Movie not found", 404)
    }

    const newMovieData = movieRepository.create({
        ...oldMovie,
        ...data
    })

    await movieRepository.save(newMovieData)


    return movieSchema.parse(newMovieData)

}

export { updateMovieService}