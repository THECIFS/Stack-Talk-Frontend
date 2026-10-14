import Axios from "./axios";

export const countAllReacciones = async () => {
    try {
        const {data} =await Axios.get('/reacciones/count')
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}