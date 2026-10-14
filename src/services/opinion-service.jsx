import Axios from "./axios"
export const findToLimitAndOffset = async (limit, offset) => {
    try {
        const {data} = await Axios.get(`/opiniones/${limit}/${offset}`)
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}