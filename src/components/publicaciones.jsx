import { useEffect, useState } from 'react'
import '../styles/publicaciones.css'
import PublicacionCardLanding from './publicacion-card-landing'
import { findToLimitAndOffset } from '../services/publicaciones-service'

export default function Publicaciones() {

    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        const getPublicaciones = async () => {
            const res = await findToLimitAndOffset(10, 0)
            setPublicaciones(res)
        }

        getPublicaciones()
    }, [])

    return (
        <div className="publicaciones" id='publicaciones'>
            <h1
                className="ui-color-white-margin-left-100px-padding-top-36px-f6f88e"
            >PUBLICACIONES</h1>
            <div className='contendor-publicaciones'>
                <div className='publicaciones-interno'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iaXLDz_UeYY?si=zdKB35XOU9S7Pxb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='publicaciones-interno'>

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