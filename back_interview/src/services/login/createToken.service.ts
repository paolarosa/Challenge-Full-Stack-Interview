import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"
import { LoginRequest } from "../../interfaces/login.interfaces"
import jwt from "jsonwebtoken"
import { User } from "../../entities/user.entitie"

const createTokenService = async ({email, password}: LoginRequest): Promise<string> =>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            email
        }
    })

    if(!user){
        throw new AppError("Invalid credentials", 403)
    }
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch){
        throw new AppError("Invalid credentials", 403)
    }
    const token = jwt.sign(
        {clientName: user.name},
        process.env.SECRET_KEY!,
        {
            expiresIn: "1h",
            subject: user.id
        }
    )
    return token
}

export {createTokenService}