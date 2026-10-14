import '../styles/categorias.css'
import CategoriaCardFoto from './categoria-card-foto'

export default function Categorias() {

    const fotosCategorias = [
        {
            alt: 'Capas de Aplicación',
            src: 'capas-aplicacion.jpg',
            contenido: [
                'Frontend', 'Backend', 'Full Stack'
            ]
        },
        {
            alt: 'Plataformas y Dispositivos',
            src: 'plataformas-dispositivos.jpg',
            contenido: [
                'Desarrollo Web', 'Desarrollo Móvil', 'Desarrollo de Videojuegos', 'Sistemas Embebidos / IoT', 'Desarrrollo de Escritorio'
            ]
        },
        {
            alt: 'Datos e Inteligencia Artificial',
            src: 'datos-ia.jpg',
            contenido: [
                'Ingeniería de Datos', 'Inteligencia Artificial', 'Ciencia de Datos'
            ]
        },
        {
            alt: 'Infraestructura, Nube y Operaciones',
            src: 'infraestructura-nube-operaciones.jpg',
            contenido: [
                'DevOps / SRE', 'Cloud Computing', 'Seguridad de Infraestructura'
            ]
        },
        {
            alt: 'Especializacion y Bajo Nivel',
            src: 'especializacion-bajonivel.jpg',
            contenido: [
                'Ciberseguridad y Software Seguro', 'Arquitectura de Software', 'Sistemas Operativos y Drivers', 'Blockchain / Web3'
            ]
        },
        {
            alt: 'Calidad y Metodología',
            src: 'calidad-metodologia.jpg',
            contenido: [
                'QA / Testing', 'Gestión de Proyectos'
            ]
        }
    ]

    return (
        <div className='categorias' id='categorias'>
            <h1>CATEGORÍAS</h1>
            <div className='contenedor-categorias'>
                <div className='group-categorias'>
                    <CategoriaCardFoto src={fotosCategorias[0].src} alt={fotosCategorias[0].alt} contenido={fotosCategorias[0].contenido}/>
                    <CategoriaCardFoto src={fotosCategorias[1].src} alt={fotosCategorias[1].alt} contenido={fotosCategorias[1].contenido}/>
                    <CategoriaCardFoto src={fotosCategorias[2].src} alt={fotosCategorias[2].alt} contenido={fotosCategorias[2].contenido}/>
                </div>

                <div className='group-categorias'>
                    <CategoriaCardFoto src={fotosCategorias[3].src} alt={fotosCategorias[3].alt} contenido={fotosCategorias[3].contenido}/>
                    <CategoriaCardFoto src={fotosCategorias[4].src} alt={fotosCategorias[4].alt} contenido={fotosCategorias[4].contenido}/>
                    <CategoriaCardFoto src={fotosCategorias[5].src} alt={fotosCategorias[5].alt} contenido={fotosCategorias[5].contenido}/>
                </div>
            </div>
        </div>
    )
}