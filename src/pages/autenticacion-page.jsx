import { useState } from "react"
import '../styles/autenticacion.css'
import { useNavigate } from "react-router-dom"
import '../styles/autenticacion-page.css'
import {createCuentaUsuario, loginCuenta} from '../services/usuario-service'
import { useAuth } from '../hooks/use-auth'

export default function Autenticacion() {

    const [login, setLogin] = useState(true)
    const navigate = useNavigate()
    const { setUser } = useAuth()

    const [loginCredenciales, setLoginCredenciales] = useState({
        correo : '',
        contrasenia : ''
    })

    const [registroCuenta, setRegistroCuenta] = useState({
        correo: '',
        contrasenia: '',
        rol: 'USER',
        estado: 'ACTIVO'
    })

    const [registroUsuario, setRegistroUsuario] = useState({
        primer_nombre: '',
        segundo_nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        puesto: '',
        foto_perfil: '',
        biografia: ''
    })


    const handleFoto = (e)=>{
        const archivo = e.target.files[0]
        if(archivo){
            var reader = new FileReader()
            reader.onloadend = function(){
                 setRegistroUsuario((prev)=>({...prev, foto_perfil:reader.result}))
            }
            reader.readAsDataURL(archivo)
        }
    }

    const handleClicLogin = async () => {
        const res = await loginCuenta(loginCredenciales.correo, loginCredenciales.contrasenia)
        if (!res) return

        localStorage.setItem('token', res.token)
        setUser(res.cuenta)
        navigate('/home')
    }

    const handleClicRegistro = async () => {
        const cuenta = { ...registroCuenta }
        const usuario = {
            ...registroUsuario
        }
        const res = await createCuentaUsuario(cuenta, usuario)

        if (res) setLogin(true)
    }

    return (
        <div 
            className="autenticacion ui-align-items-center-display-flex-height-100vh-justify-content-center-width-100percent-75f839"
        >
            {
                login ? <div  className="autenticacion-elementos ui-background-color-hex-122937-border-radius-20px-display-flex-flex-direction-colum-23c997">
                    <h1>LOGIN</h1>
                    <h2>Correo</h2>
                    <input onChange={(e)=>{setLoginCredenciales((prev)=>({...prev, correo:e.target.value}))}}/>
                    <h2>Contraseña</h2>
                    <input type="password" onChange={(e)=>{setLoginCredenciales((prev)=>({...prev, contrasenia:e.target.value}))}}/>
                    <a style={{color:'white', cursor:'pointer'}} onClick={() => { setLogin(false) }}>¿No tienes cuenta? Crea una cuenta</a>
                    <button
                    onClick={()=>{
                        handleClicLogin()
                    }}
                    ><strong>INGRESAR</strong></button>
                </div> : <div  className="autenticacion-elementos ui-background-color-hex-122937-border-radius-20px-display-flex-flex-direction-colum-23c997">
                    <h1>REGISTER</h1>
                    <h2>Correo</h2>
                    <input onChange={(e)=>{setRegistroCuenta((prev)=>({...prev, correo:e.target.value}))}}/>
                    <h2>Contraseña</h2>
                    <input type="password" onChange={(e)=>{setRegistroCuenta((prev)=>({...prev, contrasenia:e.target.value}))}}/>
                    <h2>Primer Nombre</h2>
                    <input onChange={(e)=>{setRegistroUsuario((prev)=>({...prev, primer_nombre:e.target.value}))}}/>
                    <h2>Segundo Nombre</h2>
                    <input onChange={(e)=>{setRegistroUsuario((prev)=>({...prev, segundo_nombre:e.target.value}))}}/>
                    <h2>Apellido Paterno</h2>
                    <input onChange={(e)=>{setRegistroUsuario((prev)=>({...prev, apellido_paterno:e.target.value}))}}/>
                    <h2>Apellido Materno</h2>
                    <input onChange={(e)=>{setRegistroUsuario((prev)=>({...prev, apellido_materno:e.target.value}))}}/>
                    <h2>Puesto</h2>
                    <input onChange={(e)=>{setRegistroUsuario((prev)=>({...prev, puesto:e.target.value}))}}/>
                    <h2>Foto Perfil</h2>
                    <input type="file" onChange={(e)=>{handleFoto(e)}}/>
                    <h2>Biografia</h2>
                    <input onChange={(e)=>{setRegistroUsuario((prev)=>({...prev, biografia:e.target.value}))}}/>
                    <div className="ui-display-flex-562317">
                                            <button
                        onClick={() => {
                            setLogin(true)
                        }}
                    >
                        <strong>CANCELAR</strong>
                    </button>
                    <button
                        onClick={() => {
                            handleClicRegistro()
                        }}
                    >
                        <strong>REGISTRARME</strong>
                    </button>
                    </div>
                </div>
            }
        </div>
    )
}