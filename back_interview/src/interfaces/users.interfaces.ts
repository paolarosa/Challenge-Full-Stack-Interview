import {z} from "zod"
import { DeepPartial} from "typeorm"
import { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse } from "../schemas/users.schema"

type UserRequest = z.infer<typeof userSchemaRequest>
type User = z.infer<typeof userSchema>
type UserResponse = z.infer<typeof userSchemaResponse>
type UsersResponse = z.infer<typeof usersSchemaResponse>
type UserUpdateRequest = DeepPartial<UserRequest>

export { User, UserRequest, UserResponse, UsersResponse, UserUpdateRequest}