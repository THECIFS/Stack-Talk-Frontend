import axios from 'axios'

const Axios=axios.create({
    baseURL: process.env.REACT_APP_URL_BACKEND || 'http://localhost:3000'
})

export default Axios