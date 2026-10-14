import '../styles/comentario-card-landing.css'
export default function ComentarioCardLanding(props){
    return(
        <div className="ui-align-items-center-background-color-hex-23b488-border-radius-10px-display-flex-f-96a334">
            <div className="ui-flex-shrink-0-height-150px-width-150px-c3f4ae">
                <img
                    className="ui-border-radius-100percent-height-100percent-object-fit-cover-object-position-cent-7472dd"
                    src={props?.src}
                    alt={props?.alt}
                />
            </div>
            <div className="ui-background-color-white-border-radius-10px-display-flex-flex-direction-column-hei-39352e">
                <h6 className="ui-font-size-18px-margin-0-text-align-center-304735">{props?.usuario}</h6>
                <p className="ui-text-align-justify-bf0778">{props?.contenido}</p>
                <p className="ui-margin-right-10px-text-align-end-592726"><strong>{props?.fecha}</strong></p>
            </div>
        </div>
    )
}