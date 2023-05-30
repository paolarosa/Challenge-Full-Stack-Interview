import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,  ManyToOne } from "typeorm";
import { User } from "./user.entitie";

@Entity("movies")
class Movie{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @CreateDateColumn({type:'date'})
    createdAt: string

    @ManyToOne(()=> User)
    user: User
}

export {Movie}