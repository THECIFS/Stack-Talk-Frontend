import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

export default function NavBar(){
    const navigate = useNavigate()
    
    return(
        <div className='navbar'>
            <h1>STACKTALK</h1>
            <div className="navbar-links ui-margin-right-120px-4a29ba" >
                <a href='#inicio'>Inicio</a>
                <a href='#categorias'>Categorías</a>
                <a href='#publicaciones'>Publicaciones</a>
                <a href='#comentarios'>Comentarios</a>
                <a href='#contacto'>Contacto</a>
                <button
                    className="ui-background-color-hex-68d9b3-border-radius-10px-height-30px-width-100px-23247e"
                    onClick={()=>{
                        navigate('/autenticacion')
                    }}
                ><strong>LOGIN</strong></button>
            </div>
        </div>
    )
}