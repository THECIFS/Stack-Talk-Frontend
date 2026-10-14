import { useEffect, useState } from "react";
import NavBarAutenticado from "../components/navbar-autenticado";
import TarjetaEstadistica from "../components/tarjeta-estadistica";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart } from 'recharts'
import PublicacionCardLanding from "../components/publicacion-card-landing";
import { findToLimitAndOffset } from "../services/publicaciones-service";
import { useAuth } from "../hooks/use-auth";

import { countAllPublicaciones } from '../services/publicaciones-service'
import { countAllUsuarios } from '../services/usuario-service'
import { countAllReacciones } from '../services/reaccion-service'
import { countAllComentarios } from '../services/comentario-service'
import { createOpinion } from "../services/opinion-service";

export default function Home() {


    const [openCreateComentario, setOpenCreateComentario] = useState(false)

    const publicacionesPorCategoriaData = [
        { categoria: 'Tecnología', cantidad: 45 },
        { categoria: 'Programación', cantidad: 32 },
        { categoria: 'Diseño UX/UI', cantidad: 18 },
        { categoria: 'Base de Datos', cantidad: 24 },
        { categoria: 'DevOps', cantidad: 12 },
        { categoria: 'Inteligencia Artificial', cantidad: 29 }
    ];

    const usuariosPorAnioData = [
        { anio: '2010', usuarios: 1200 },
        { anio: '2011', usuarios: 1850 },
        { anio: '2012', usuarios: 2400 },
        { anio: '2013', usuarios: 3100 },
        { anio: '2014', usuarios: 4500 },
        { anio: '2015', usuarios: 6200 },
        { anio: '2016', usuarios: 8900 },
        { anio: '2017', usuarios: 12400 },
        { anio: '2018', usuarios: 16500 },
        { anio: '2019', usuarios: 22000 },
        { anio: '2020', usuarios: 31500 },
        { anio: '2021', usuarios: 42000 },
        { anio: '2022', usuarios: 55000 },
        { anio: '2023', usuarios: 71000 },
        { anio: '2024', usuarios: 89500 },
        { anio: '2025', usuarios: 112000 },
        { anio: '2026', usuarios: 145000 }
    ];

    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        const getPublicaciones = async () => {
            const res = await findToLimitAndOffset(20, 0)
            setPublicaciones(res)
        }

        getPublicaciones()
    }, [])


    const [countPublicaciones, setCountPublicaciones] = useState(0)
    const [countComentarios, setCountComentarios] = useState(0)
    const [countUsuarios, setCountUsuarios] = useState(0)
    const [countReacciones, setCountReacciones] = useState(0)

    useEffect(() => {
        const getCountPublicaciones = async () => {
            const res = await countAllPublicaciones()
            setCountPublicaciones(res)
        }

        const getCountComentarios = async () => {
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
    }, [])


    const { user } = useAuth()

    const isAdministrador = user?.rol === 'ADMIN'

    const [opinionData, setOpinionData] = useState({
        usuario_id: user?.usuario?.id,
        mensaje: '',
        estado_aprobacion: 'APROBADO'
    })

    const handleClicCreateOpinion = async () => {
        const res = await createOpinion({...opinionData, usuario_id:user?.usuario?.id})
        if (res) { alert('El comentario se realizo'); setOpenCreateComentario(!openCreateComentario) }
    }

    return (
        <div>
            <NavBarAutenticado />
            {
                isAdministrador && (
                    <div style={{ display: 'flex', gap: '30px', height: '100px', justifyContent: 'center', marginTop: '50px', width: '100%' }}>
                        <TarjetaEstadistica titulo='USUARIOS' valor={countUsuarios} />
                        <TarjetaEstadistica titulo='OPINIONES' valor={countComentarios} />
                        <TarjetaEstadistica titulo='PUBLICACIONES' valor={countPublicaciones} />
                        <TarjetaEstadistica titulo='LIKES' valor={countReacciones} />
                    </div>
                )
            }
            {
                isAdministrador && (
                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div style={{ alignItems: 'center', display: 'flex', gap: '50px', height: '450px', justifyContent: 'center', marginTop: '35px', width: '1200px' }}>
                            <div style={{ alignItems: 'center', border: '1px solid #122937', display: 'flex', flexDirection: 'column', height: '450px', justifyContent: 'center', width: '650px' }}>
                                <h1 style={{ fontSize: '20px', margin: 0 }}>Cantidad de Publicaciones por Categoría</h1>
                                <BarChart
                                    style={{ aspectRatio: 1.618, height: '350px', width: '550px' }}
                                    responsive
                                    data={publicacionesPorCategoriaData}
                                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid />
                                    <XAxis dataKey={'categoria'} />
                                    <YAxis width={'auto'} label />
                                    <Tooltip />
                                    <Legend />
                                    <Bar fill="#122937" dataKey={'cantidad'} radius={[10, 10, 0, 0]} />

                                </BarChart>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', width: '500px' }}>
                                <div style={{ alignItems: 'center', border: '1px solid #122937', display: 'flex', flexDirection: 'column', height: '200px', justifyContent: 'center', width: '500px' }}>
                                    <h1 style={{ fontSize: '20px', margin: 0 }}>Usuarios por Año</h1>
                                    <LineChart
                                        style={{ aspectRatio: 1.618, height: '100px', width: '400px' }}
                                        responsive
                                        data={usuariosPorAnioData}
                                        margin={{ top: 5, left: 0, right: 0, bottom: 5 }}
                                    >
                                        <CartesianGrid />
                                        <XAxis dataKey='anio' />
                                        <YAxis width={'auto'} />
                                        <Tooltip />
                                        <Legend />
                                        <Line dataKey='usuarios' />
                                    </LineChart>
                                </div>
                                <div style={{ alignItems: 'center', border: '1px solid #122937', display: 'flex', flexDirection: 'column', height: '235px', justifyContent: 'center', width: '500px' }}>
                                    <h1 style={{ fontSize: '20px', margin: 0 }}>Ultimas Opiniones</h1>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxHeight: '150px', maxWidth: '450px', minHeight: '150px', minWidth: '450px', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <div style={{ height: '50px', width: '50px' }}>
                                                <img src="usuario.jpg" style={{ borderRadius: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }} />
                                            </div>
                                            <div>
                                                <h1 style={{ fontSize: '14px', margin: 0 }}>Jose Manuel Hernandez</h1>
                                                <p style={{ margin: 0 }}>Mi experiencia con la plataforma es muy agradable!!!!</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <div style={{ height: '50px', width: '50px' }}>
                                                <img src="usuario.jpg" style={{ borderRadius: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }} />
                                            </div>
                                            <div>
                                                <h1 style={{ fontSize: '14px', margin: 0 }}>Jose Manuel Hernandez</h1>
                                                <p style={{ margin: 0 }}>Mi experiencia con la plataforma es very agradable!!!!</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <div style={{ height: '50px', width: '50px' }}>
                                                <img src="usuario.jpg" style={{ borderRadius: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }} />
                                            </div>
                                            <div>
                                                <h1 style={{ fontSize: '14px', margin: 0 }}>Jose Manuel Hernandez</h1>
                                                <p style={{ margin: 0 }}>Mi experiencia con la plataforma es muy agradable!!!!</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <div style={{ height: '50px', width: '50px' }}>
                                                <img src="usuario.jpg" style={{ borderRadius: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }} />
                                            </div>
                                            <div>
                                                <h1 style={{ fontSize: '14px', margin: 0 }}>Jose Manuel Hernandez</h1>
                                                <p style={{ margin: 0 }}>Mi experiencia con la plataforma es muy agradable!!!!</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <div style={{ height: '50px', width: '50px' }}>
                                                <img src="usuario.jpg" style={{ borderRadius: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }} />
                                            </div>
                                            <div>
                                                <h1 style={{ fontSize: '14px', margin: 0 }}>Jose Manuel Hernandez</h1>
                                                <p style={{ margin: 0 }}>Mi experiencia con la plataforma es muy agradable!!!!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                !isAdministrador && (
                    <div style={{ alignItems: 'center', display: 'flex', height: '100%', justifyContent: 'center', width: '100%' }}>
                        <div style={{ height: '650px', width: '1200px', display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center', width: '250px' }}>
                                <div style={{ alignItems: 'center', border: '1px solid black', borderRadius: '10px', display: 'flex', flexDirection: 'column', height: '350px', justifyContent: 'space-around', width: '250px' }}>
                                    <div style={{ height: '80px', width: '80px' }}><img style={{ borderRadius: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }} src={user?.usuario?.foto_perfil} /></div>
                                    <h1 style={{ fontSize: '18px', margin: 0 }}>{user?.usuario?.primer_nombre + " " + user?.usuario?.apellido_paterno + " " + user?.usuario?.apellido_materno}</h1>
                                    <p style={{ fontSize: '11px', margin: 0 }}>
                                        {user?.usuario?.biografia}
                                    </p>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'end' }}>
                                        <div style={{ alignItems: 'center', display: 'flex', gap: '5px', justifyContent: 'center' }}>
                                            <p>{0}</p>
                                            <div style={{ height: '32px', width: '32px' }}><img style={{ backgroundColor: 'white', borderRadius: '5px', height: '100%', width: '100%' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Ik0xNSA1Ljg4IDE0IDEwaDUuODNhMiAyIDAgMCAxIDEuOTIgMi41NmwtMi4zMyA4QTIgMiAwIDAgMSAxNy41IDIySDRhMiAyIDAgMCAxLTItMnYtOGEyIDIgMCAwIDEgMi0yaDIuNzZhMiAyIDAgMCAwIDEuNzktMS4xMUwxMiAyYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PHBhdGggZD0iTTcgMTB2MTIiLz48L3N2Zz4=" /></div>
                                        </div>
                                        <div style={{ alignItems: 'center', display: 'flex', gap: '5px', justifyContent: 'center' }}>                        <p>{0}</p>
                                            <div style={{ height: '32px', width: '32px' }}><img style={{ backgroundColor: 'white', borderRadius: '5px', height: '100%', width: '100%' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlIHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTIuOTkyIDE2LjM0MmEyIDIgMCAwIDEgLjA5NCAxLjE2N2wtMS4wNjUgMy4yOWExIDEgMCAwIDAgMS4yMzYgMS4xNjhsMy40MTMtLjk5OGEyIDIgMCAwIDEgMS4wOTkuMDkyIDEwIDEwIDAgMSAwLTQuNzc3LTQuNzE5Ii8+PC9zdmc+" /></div>
                                        </div>
                                        <div style={{ alignItems: 'center', display: 'flex', gap: '5px', justifyContent: 'center' }}>                        <p>{0}</p>
                                            <div style={{ height: '32px', width: '32px' }}><img style={{ backgroundColor: 'white', borderRadius: '5px', height: '100%', width: '100%' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZSBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg==" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ alignItems: 'center', backgroundColor: '#68D9B3', borderRadius: '10px', display: 'flex', flexDirection: 'column', height: '130px', justifyContent: 'center', width: '250px' }}>
                                    <h1 style={{ fontSize: '18px', margin: 0 }}>OPINA AHORA</h1>
                                    <p style={{ fontSize: '11px', margin: 0 }}>Crea un comentario sobre la comunidad y tus experiencias</p>
                                    <div style={{ height: '32px', width: '32px' }}>
                                        <img
                                            onClick={() => {
                                                setOpenCreateComentario(!openCreateComentario)
                                            }}
                                            style={{ backgroundColor: 'white', borderRadius: '5px', height: '100%', width: '100%' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3VzZSBwcmV2aWV3LWljb24iPjxyZWN0IHg9IjUiIHk9IjIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyMCIgcng9IjciLz48cGF0aCBkPSJNMTIgNnY0Ii8+PC9zdmc+" />
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                width: '830px', maxWidth: '830px', minWidth: '830px',
                                height: '570px', minHeight: '570px', maxHeight: '570px',
                                display: 'flex',
                                flexDirection: 'column', justifyContent: 'center',
                                alignItems: 'center', overflowY: 'scroll', scrollbarWidth: 'none', gap: '16px',
                                paddingTop: '16px'
                            }}>
                                {
                                    publicaciones.map(
                                        publicacion => (
                                            <PublicacionCardLanding likes={0} comentarios={0} visualizaciones={0} src={publicacion.fotos[0].url_imagen} titulo={publicacion?.titulo} alt={publicacion.titulo} descripcion={publicacion.contenido} />
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

            {
                openCreateComentario && (
                    <div>
                        <div
                            style={{
                                inset: 0, top: 0, left: 0, position: 'fixed', zIndex: 999999, width: '100%', height: '100vh',
                                backgroundColor: 'black', opacity: 0.5
                            }}
                        >
                        </div>
                        <div
                            style={{
                                inset: 0, top: 0, left: 0, position: 'fixed', zIndex: 999999, width: '100%', height: '100vh',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                        >
                            <div>
                                <h1>NUEVO COMENTARIO</h1>
                                <textarea
                                    style={{
                                        minWidth: '350px', maxWidth: '350px',
                                        minHeight: '400px', maxHeight: '400px'
                                    }}
                                    onChange={(e) => { setOpinionData((prev) => ({ ...prev, mensaje: e.target.value })) }}
                                />
                                <div>
                                    <button
                                        onClick={() => {
                                            setOpenCreateComentario(!openCreateComentario)
                                        }}
                                    >
                                        <strong>
                                            CERRAR
                                        </strong>
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        handleClicCreateOpinion()
                                    }}
                                >
                                    <strong>
                                        CREAR
                                    </strong>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
