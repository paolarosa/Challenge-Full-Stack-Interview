import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listUserService } from "../services/users/listUser.service";
import { UserUpdateRequest } from "../interfaces/users.interfaces";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
    const data = req.body
    const newUser = await createUserService(data)
    return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response) => {
    const user = await listUserService()
    return res.json(user)
}

const updateUserController = async (req: Request, res: Response) => {
    const userId = req.params.id
    const updatedValues: UserUpdateRequest = req.body
    const updateUser = await updateUserService(updatedValues, userId)
    return res.json(updateUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.params.id)
    res.status(204).send()
}

export { createUserController, listUserController, updateUserController, deleteUserController }