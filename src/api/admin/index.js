import api from '../../utils/request'

export function riseAuth(id,role){
    return api.post('/api/admin/modify',{id,role})
}