import Axios from "./axios"
export const countAllComentarios = async () => {
    try {
        const {data} = await Axios.get('/comentarios/count')
        return data 
    } catch (error) {
        alert('ocurrio un error')
    }
}