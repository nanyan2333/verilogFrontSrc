import axios from 'axios'
import { getToken } from './cookie'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// 配置拦截器，请求加token
api.interceptors.request.use(
    (config) => {

        config.headers.Authorization = `Bearer ${getToken()}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default api