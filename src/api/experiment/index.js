import api from '../../utils/request'

/**
 * 
 * @param {courseId} id 
 * @returns 
 */
export function getUserUndoExperiment(id) {
    return api.get('/experiment', { params: { id } })
}

/**
 * 
 * @param {
 *  courseId,
 *  experimentId,
 *  files,
 *  names
 * } data 
 * @returns 
 */
export function uploadExperimentFile(data) {
    return api.post('/experiment/file', data)
}

export function submitExperiment(data) {
    return api.post('/experiment/submit', data)
}