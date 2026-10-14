import Axios from "./axios"
export const findToLimitAndOffset = async (limit, offset) => {
    try {
        const {data} = await Axios.get(`/opiniones/${limit}/${offset}`)
        console.log(data)
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}

export const createOpinion = async (opinion) => {
    try {
        const {data} = await Axios.post(`/opiniones`, {...opinion})
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}