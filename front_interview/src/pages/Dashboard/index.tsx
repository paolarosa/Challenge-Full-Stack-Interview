import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface Movie {
    id: string;
    name: string
}

export const Dashboard = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => { 
        (async () => {
            const response = await api.get<Movie[]>("movies")
            setMovies(response.data)
        })() 
     }, []) //cria função pra ser executada logo após ser chamada, função autoexecutável
    return(
        <>
         <h1>Dashboard</h1>
        <ul>
            {movies.map(movie => <li key={movie.id}>{movie.name}</li>)}
        </ul>
        </>
       
    )
}