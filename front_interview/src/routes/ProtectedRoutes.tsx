import { useAuth } from "../hooks/useAuth"
import { Outlet } from "react-router-dom"

export const ProtectecRoutes = () => {
    const {loading} = useAuth()

    if(loading){    ///se a tela tiver carregando renderiza carregando, se não outlet
        return <div> Carregando ...</div>
    }
    return <Outlet/>
}