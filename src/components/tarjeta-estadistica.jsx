import '../styles/tarjeta-estadistica.css'

export default function TarjetaEstadistica(props){
    return(
        <div className={`tarjeta-estadistica ${props?.className || ''}`.trim()}>
            <h2>{props?.titulo}</h2>
            <h1>{props?.valor}</h1>
        </div>
    )
}