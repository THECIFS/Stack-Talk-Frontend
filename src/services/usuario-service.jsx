import Axios from "./axios";

export const countAllUsuarios = async () => {
    try {
        const {data} = await Axios.get('/cuentas/count')
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}

export const loginCuenta = async (correo, contrasenia) => {
    try {
        console.log(correo)
        const {data} = await Axios.post('/cuentas/login',{correo:correo, contrasenia:contrasenia})
        return data
    } catch (error) {
        alert('ocurrio un error')
    }
}

export const createCuentaUsuario = async (cuenta, usuario) => {
    try {
        const {data} = await Axios.post('/cuentas', {cuenta, usuario})
        return data
    } catch (error) {
        console.log(error)
        alert('ocurrio un error')
    }
}