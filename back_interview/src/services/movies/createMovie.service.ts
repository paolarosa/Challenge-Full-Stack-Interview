import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { MovieRequest } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities/movie.entitie";
import { User } from "../../entities/user.entitie";
import { movieSchema } from "../../schemas/movies.schema";


const createMovieService = async (data: MovieRequest, userId: string): Promise<MovieRequest> => {
    const movieRepository : Repository<Movie> = AppDataSource.getRepository(Movie)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const movieData: DeepPartial<Movie> = {
        ...data,
        user
    }
    const movie : Movie = movieRepository.create(movieData)
    await movieRepository.save(movie)
    return movieSchema.parse(movie)
 }

 export { createMovieService}