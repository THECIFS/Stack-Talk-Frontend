import { useEffect, useState } from 'react'
import '../styles/comentarios.css'
import ComentarioCardLanding from './comentario-card-langin'
import { findToLimitAndOffset } from '../services/opinion-service'
export default function Comentarios() {
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        const getComentarios = async () => {
            const res = await findToLimitAndOffset(3, 0)
            setComentarios(res)
        }

        getComentarios()
    }, [])

    return (
        <div className="comentarios" id='comentarios'>
            <h1 className="ui-margin-right-100px-text-align-end-836444">COMENTARIOS</h1>
            <div
                className="ui-align-items-center-display-flex-gap-20px-height-400px-justify-content-center-width-100percent-6d1ea4">
                {
                    comentarios?.map(
                        comentario => (
                            <ComentarioCardLanding src={comentario.usuario.foto_perfil} alt='Usuario' usuario={comentario.usuario.primer_nombre+" "+comentario.usuario.apellido_paterno} contenido={comentario.mensaje} fecha={comentario.fecha.split('T')[0]} />
                        )
                    )
                }
                {/* <ComentarioCardLanding src='usuario.jpg' alt='Usuario' usuario='Carlos Iván Flores Sánchez' contenido='Esto es un comentario de prueba. Validando el Sistema' fecha='10/10/2026'/>
                <ComentarioCardLanding src='usuario.jpg' alt='Usuario' usuario='Carlos Iván Flores Sánchez' contenido='Esto es un comentario de prueba. Validando el Sistema' fecha='10/10/2026'/> */}
            </div>
        </div>
    )
}