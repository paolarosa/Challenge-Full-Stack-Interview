import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { UserRequest, UserUpdateRequest } from "../../interfaces/clients.interfaces";
import { User } from "../../entities/user.entitie";
import { userSchema } from "../../schemas/users.schema";


const updateUserService = async (data: UserUpdateRequest, userId: string): Promise<UserRequest> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const oldUser: User | null = await userRepository.findOneBy({id: userId})

    if (!oldUser) {
        throw new AppError("User not found", 404)
    }

    const newUserData = userRepository.create({
        ...oldUser,
        ...data
    })

    await userRepository.save(newUserData)


    return userSchema.parse(newUserData)

}

export { updateUserService }