import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'
import { useState } from 'react'
import '../styles/navbar-autenticado.css'
import { useAuth } from '../hooks/use-auth'

export default function NavBarAutenticado() {
    const navigate = useNavigate()

    const {user, setUser} = useAuth()

    const [openOpciones, setOpenOpciones] = useState(false)

    return (
        <div className='navbar'>
            <h1>STACKTALK</h1>
            <div className='navbar-links'>
                <div className="ui-height-50px-margin-right-100px-width-50px-1601b9">
                    <img
                        className="ui-border-radius-100percent-height-100percent-object-fit-cover-object-position-cent-7472dd"
                        src={user?.usuario?.foto_perfil}
                        onClick={() => {
                            setOpenOpciones(!openOpciones)
                        }}
                    />
                </div>
            </div>

            {
                openOpciones && (
                    <div
                        className="ui-background-color-hex-122937-display-flex-flex-direction-column-height-150px-just-f80acd"
                    >
                        <div className="ui-align-items-center-display-flex-justify-content-space-between-9803f8">
                            <a><strong>Publicaciones</strong></a>
                            <div className="ui-height-16px-width-16px-9bceda">
                                <img
                                    className="ui-height-100percent-width-100percent-979f7e"
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcXVhcmUtYXJyb3ctb3V0LXVwLXJpZ2h0IHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTIxIDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDYiLz48cGF0aCBkPSJtMjEgMy05IDkiLz48cGF0aCBkPSJNMTUgM2g2djYiLz48L3N2Zz4='
                                />
                            </div>
                        </div>
                        <div className="ui-align-items-center-display-flex-justify-content-space-between-9803f8">
                            <a><strong>Usuarios</strong></a>
                            <div className="ui-height-16px-width-16px-9bceda">
                                <img
                                    className="ui-height-100percent-width-100percent-979f7e"
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcXVhcmUtYXJyb3ctb3V0LXVwLXJpZ2h0IHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTIxIDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDYiLz48cGF0aCBkPSJtMjEgMy05IDkiLz48cGF0aCBkPSJNMTUgM2g2djYiLz48L3N2Zz4='
                                />
                            </div>
                        </div>
                        <div className="ui-align-items-center-display-flex-justify-content-space-between-9803f8">
                            <a><strong>Galería</strong></a>
                            <div className="ui-height-16px-width-16px-9bceda">
                                <img
                                    className="ui-height-100percent-width-100percent-979f7e"
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcXVhcmUtYXJyb3ctb3V0LXVwLXJpZ2h0IHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTIxIDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDYiLz48cGF0aCBkPSJtMjEgMy05IDkiLz48cGF0aCBkPSJNMTUgM2g2djYiLz48L3N2Zz4='
                                />
                            </div>
                        </div>
                        <div className="ui-align-items-center-display-flex-justify-content-space-between-9803f8"
                            onClick={()=>{localStorage.removeItem('token'); setUser(null);navigate('/')}}
                        >
                            <a><strong>Cerrar Sesión</strong></a>
                            <div className="ui-height-16px-width-16px-9bceda">
                                <img
                                    className="ui-height-100percent-width-100percent-979f7e"
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcXVhcmUtYXJyb3ctb3V0LXVwLXJpZ2h0IHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTIxIDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDYiLz48cGF0aCBkPSJtMjEgMy05IDkiLz48cGF0aCBkPSJNMTUgM2g2djYiLz48L3N2Zz4='
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}