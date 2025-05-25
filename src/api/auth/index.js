import api from '../../utils/request';
export const login = ((data) => {
  return api.post('/account/login', data)
});

export const register = ((data) => {
  return api.post('/account/register', data)
});



