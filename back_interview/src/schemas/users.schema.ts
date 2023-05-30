import { z } from "zod"

const userSchema = z.object({
    id: z.string(),
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(4).max(20),
    phone: z.string()

})

const userSchemaRequest = userSchema.omit({
    id: true
})

const userSchemaResponse = userSchema.extend({
    createdAt: z.string()
}).omit({password: true})

const usersSchemaResponse = z.array(userSchemaResponse)

const userSchemaUpdate = userSchema.omit({
    id: true
}).partial()

export { userSchema, userSchemaResponse, userSchemaRequest, usersSchemaResponse, userSchemaUpdate }