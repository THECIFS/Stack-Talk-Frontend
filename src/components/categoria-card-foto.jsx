import { useState } from 'react'
import '../styles/categoria-card-foto.css'
import CategoriaView from './categoria-view'
export default function CategoriaCardFoto(props){
    const [openCategoriaView, setOpenCategoriaView] = useState(false)
    return(
        <div  className="categoria-card-foto ui-height-200px-width-200px-69e80e">
            <img
                onClick={()=>{
                    setOpenCategoriaView(!openCategoriaView)
                }}
                className="ui-border-radius-10px-height-100percent-width-100percent-bb8c87"
                src={props?.src}
                alt={props?.alt}
            />

            {
                openCategoriaView && (
                    <CategoriaView src={props?.src} titulo={props?.alt} contenido={props?.contenido} accion={setOpenCategoriaView}/>
                )
            }
        </div>
    )
}