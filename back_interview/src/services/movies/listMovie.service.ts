import { Repository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { MoviesResponse } from "../../interfaces/movies.interfaces";
import { User } from "../../entities/user.entitie";
import { Movie } from "../../entities/movie.entitie";
import { moviesSchemaResponse } from "../../schemas/movies.schema";


const listMoviesService = async (userId: string): Promise<MoviesResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const movie: Movie[] = await movieRepository.find({
        where: {
            user: user
        }
    })

    return moviesSchemaResponse.parse(movie)

}

export { listMoviesService }