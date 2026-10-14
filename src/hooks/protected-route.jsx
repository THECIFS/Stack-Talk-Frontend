import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./use-auth"

export const ProtectedRoute = ({children, redirectTo, rol})=>{
    const {user} = useAuth()
    // if(!user) return <Navigate to={redirectTo}></Navigate>
    // if(rol!=user.rol) return <Navigate to={redirectTo}></Navigate>
    return children ? children : <Outlet/>
}