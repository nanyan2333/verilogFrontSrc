import axios from 'axios'
import { getToken } from './cookie'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

// 配置拦截器，请求加token
api.interceptors.request.use(
    (config) => {
        console.log('Request URL:', config.baseURL + config.url)
        config.headers.Authorization = `Bearer ${getToken()}`
        if (config.method === 'get' && config.params && typeof config.params === 'object') {
            const cleaned = {}
            for (const [key, value] of Object.entries(config.params)) {
                if (value !== null && value !== undefined) {
                    cleaned[key] = value
                }
            }
            config.params = cleaned
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default api