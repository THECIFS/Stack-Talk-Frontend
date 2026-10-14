import { useEffect, useState } from 'react'
import '../styles/inicio.css'
import TarjetaEstadistica from './tarjeta-estadistica'
import { countAllPublicaciones } from '../services/publicaciones-service'
import { countAllUsuarios } from '../services/usuario-service'
import { countAllReacciones } from '../services/reaccion-service'
import { countAllComentarios } from '../services/comentario-service'
import { useNavigate } from 'react-router-dom'

export default function Inicio() {
    const [countPublicaciones, setCountPublicaciones] = useState(0)
    const [countComentarios, setCountComentarios] = useState(0)
    const [countUsuarios, setCountUsuarios] = useState(0)
    const [countReacciones, setCountReacciones] = useState(0)

    const navigate = useNavigate()

    useEffect(()=>{
        const getCountPublicaciones = async () => {
            const res = await countAllPublicaciones()
            setCountPublicaciones(res)
        }
        
        const getCountComentarios = async () =>{
            const res = await countAllComentarios()
            setCountComentarios(res)
        }

        const getCountUsuarios = async () => {
            const res = await countAllUsuarios()
            setCountUsuarios(res)
        }

        const getCountReacciones = async () => {
            const res = await countAllReacciones()
            setCountReacciones(res)
        }

        getCountUsuarios()
        getCountComentarios()
        getCountReacciones()
        getCountPublicaciones()
    },[])

    return (
        <div className="inicio" id='inicio'>
            <div className="contenedor-informacion">
                <div className="contenedor-informacion-interno"
                >
                    <div className="ui-background-color-hex-cbd5d8-height-350px-opacity-0p5-position-absolute-width-550px-z-index-1-a53168"></div>
                    <div
                        className="ui-align-items-center-display-flex-flex-direction-column-height-100percent-justify-8e5a1d"
                    >
                        <h1>COMPARTE Y SE TU MISMO</h1>
                        <p className="ui-color-white-width-390px-c68388">
                            Unete a la comunidad y comparte tus experiencias en
                            el mundo Tech. Porque no solo somos innovadores si no tambien
                            apasionados.
                        </p>
                        <button
                            onClick={()=>{
                                navigate('/autenticacion')
                            }}
                            className="ui-background-color-hex-68d9b3-border-radius-10px-font-size-30px-1a146b"
                        >
                            <strong>
                                UNIRME
                            </strong>
                        </button>
                    </div>
                </div>
                <div className="contenedor-informacion-interno">
                    <img className="ui-height-100percent-object-fit-cover-width-100percent-0ece64"
                        src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        alt="imagen"
                    />
                </div>
            </div>
            <div className='tarjetas-lista'>
                <TarjetaEstadistica titulo={'COMENTARIOS'} valor={countComentarios}/>
                <TarjetaEstadistica titulo={'USUARIOS'} valor={countUsuarios} className='tarjeta-estadistica-destacada'/>
                <TarjetaEstadistica titulo={'LIKES'} valor={countReacciones}/>
            </div>
        </div>
    )
}