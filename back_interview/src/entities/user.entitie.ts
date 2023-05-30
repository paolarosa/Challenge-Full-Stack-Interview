import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Movie } from "./movie.entitie";

@Entity("users")
class User{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({unique: true})
    email: string
    
    @Column()
    password: string

    @Column({unique: true})
    phone: string

    @CreateDateColumn({type:'date'})
    createdAt: string

    @OneToMany(()=> Movie, movie => movie.user, { cascade: true })
    movie: Movie[]
}

export{User}