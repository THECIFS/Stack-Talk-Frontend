import Axios from './axios'

export const countAllPublicaciones = async () => {
    try {
        const {data} = await Axios.get('/publicaciones/count')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const findToLimitAndOffset = async (limit, offset) => {
    try {
        const {data} = await Axios.get(`/publicaciones/${limit}/${offset}`)
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}