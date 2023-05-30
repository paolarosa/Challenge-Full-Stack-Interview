import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entitie";
import { UserResponse } from "../../interfaces/clients.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";


const createUserService = async (data: User): Promise<UserResponse> => {
   
   const {email, name, password, phone, createdAt} = data
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where:{
            email
        }
    })
    if(findUser){
        throw new AppError("User already exists", 409)
    }
    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        phone,
        createdAt
    })
    await userRepository.save(user)
    return userSchemaResponse.parse(user)
    
}
export {createUserService}