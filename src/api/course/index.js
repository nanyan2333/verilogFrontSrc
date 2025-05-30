import api from '../../utils/request';


/**
 * 
 * @param {
 *      name: string,
 *      beginTime: string,
 *      endTime: string,
 * } data
 *  
 * @returns 
 */
export function createCourse(data) {
    return api.post('/course', data);
}

export function getCourseDetail(id) {
    return api.get(`/course/${id}`);
}


/**
 * 
 * @param {*userid} id 
 * @returns 
 */
export function getCourseList(id) {
    return api.get('/course', { params: { id } });
}

/**
 * 
 * @param {*courseid} id 
 * @returns 
 */
export function getCourseStudentList(id) {
    return api.get('/course/student', { params: { id } });
}

/**
 * 
 * @param {*courseid} id 
 * @returns 
 */
export function getCourseAduitList(id) {
    return api.get('/course/audit', { params: { id } });
}


/**
 * 
 * @param {userid} id 
 * @param {status} status 
 * @returns 
 */
export function auditStudent(id, status) {
    return api.post('/course/audit', { id, status })
}


/**
 * 
 * @param {
 *  name
 *  description
 *  startTime
 *  endTime
 * } data 
 * @returns 
 */
export function createCourseExperiment(data) {
    return api.post('/course/experiment', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

/**
 * 
 * @param {*} courseId 
 * @param {*} experimentId 
 * @param {*} userId 
 * @returns 
 */
export function getExperimentResult(courseId, experimentId, userId) {
    return api.get('/course/result', { params: { courseId, experimentId, userId } })
}
