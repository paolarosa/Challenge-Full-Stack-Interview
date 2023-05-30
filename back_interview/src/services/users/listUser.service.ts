import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { usersSchemaResponse } from "../../schemas/users.schema";


const listUserService = async () => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const findUser: Array<User> = await userRepository.find({
    withDeleted: true
  })
 const users = usersSchemaResponse.parse(findUser) 

  return users
}

export { listUserService } 