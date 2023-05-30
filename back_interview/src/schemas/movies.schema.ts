import {z} from "zod"

const movieSchema = z.object({
    id: z.string(),
    name: z.string().min(3),
})

const movieSchemaRequest = movieSchema.omit({
    id: true
})

const movieSchemaResponse = movieSchema.extend({
    createdAt: z.string()
})

const movieSchemaUpdate = movieSchema.omit({
    id: true
}).partial()

const moviesSchemaResponse = z.array(movieSchemaResponse)

export { movieSchema, movieSchemaRequest, movieSchemaResponse, movieSchemaUpdate, moviesSchemaResponse}