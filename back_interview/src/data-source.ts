import {DataSource, DataSourceOptions} from "typeorm"
import "dotenv/config"
import { User } from "./entities/user.entitie"
import { Movie } from "./entities/movie.entitie"
import { CreateTable1685404179882 } from "./migrations/1685404179882-CreateTable"


const DataSourceConfig = () : DataSourceOptions => {

    if(!process.env.DATABASE_URL){
        throw new Error("Env var DATABASE_URL does not exists")
    }
    return{
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [User, Movie],
        migrations: [CreateTable1685404179882]
    }
}

const AppDataSource: DataSource = new DataSource(DataSourceConfig())

export {AppDataSource}