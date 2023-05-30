import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"
import { Movie } from "../../entities/movie.entitie"


const deleteMovieService = async (movieId: string): Promise<void> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const movie: Movie | null = await movieRepository.findOneBy({id: movieId})

    if (!movie) {
        throw new AppError("Movie not found", 404)
    }

    await movieRepository.remove(movie)
}

export { deleteMovieService }