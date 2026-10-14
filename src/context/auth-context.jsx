import {createContext, useEffect, useState} from 'react'
import Axios from '../services/axios'

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const verifyToken = async () => {
            try {
                const token = localStorage.getItem('token')
                const {data} = await Axios.get('/cuentas/verify', {
                    headers : {
                        'authorization' : `Bearer ${token}`
                    }
                })
                setUser(data)
                console.log(data)
            } catch (error) {
                setUser(null)
            }
        }
        verifyToken()
    },[])
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}