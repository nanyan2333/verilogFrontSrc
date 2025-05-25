import api from '../../utils/request';

/**
 * 
 * @param {
 *  id -courseid
 * } data 
 * @returns 
 */
export function joinCourse(data) {
  return api.post('/student/join', data);
}