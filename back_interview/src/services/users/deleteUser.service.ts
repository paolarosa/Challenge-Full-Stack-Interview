import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"
import { User } from "../../entities/user.entitie"


const deleteUserService = async (userId: string):Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user: User | null = await userRepository.findOneBy({id: userId})
    
    if (!user) {
        throw new AppError("User not found", 404)
    }
    await userRepository.remove(user)

    }
    
    export {deleteUserService}