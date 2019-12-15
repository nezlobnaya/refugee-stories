import api from '../utils/api'

export const GET_STORIES_DATA_START = 'GET_STORIES_DATA_START'
export const GET_STORIES_DATA_SUCCESS = 'GET_STORIES_DATA_SUCCESS'
export const GET_STORIES_DATA_FAILURE = 'GET_STORIES_DATA_FAILURE'

export function fetchStoriesData() {
    return dispatch => {
        dispatch({ type: GET_STORIES_DATA_START })
        api()
        .get('/stories')
        .then(res => {console.log("RES STORIES", res)
            dispatch({ type:GET_STORIES_DATA_SUCCESS, payload: res.data.filter(item => item.pending === 0) })})
        .catch(err => {
            dispatch({ type: GET_STORIES_DATA_FAILURE, payload: err.response})
        })
    }
}

export const GET_STORIES_PENDING_DATA_START = 'GET_STORIES_DATA_START'
export const GET_STORIES_PENDING_DATA_SUCCESS = 'GET_STORIES_DATA_SUCCESS'
export const GET_STORIES_PENDING_DATA_FAILURE = 'GET_STORIES_DATA_FAILURE'

export function fetchStoriesPendingData() {
    return dispatch => {
        dispatch({ type: GET_STORIES_PENDING_DATA_START })
        api()
        .get('/stories')
        .then(res => {console.log("RES PENDING STORIES", res)
            dispatch({ type:GET_STORIES_PENDING_DATA_SUCCESS, payload: res.data.filter(item => item.pending === 1) })})
        .catch(err => {
            dispatch({ type: GET_STORIES_PENDING_DATA_FAILURE, payload: err.response})
        })
    }
}


// export const POST_STORIES_DATA_START = 'POST_STORIES_DATA_START'
// export const POST_STORIES_DATA_SUCCESS = 'POST_STORIES_DATA_SUCCESS'
// export const POST_STORIES_DATA_FAILURE = 'POST_STORIES_DATA_FAILURE'

// export function postStoryData(story) {
//     return dispatch => {
//         dispatch({ type: POST_STORIES_DATA_START, payload: story })
//         api()
//         .post('/stories', story)
//         .then(res => {
//             console.log('RES POST', res)
//             dispatch({ type: POST_STORIES_DATA_SUCCESS, payload: res.data })
//         })
//         .catch(err => {dispatch({ type: POST_STORIES_DATA_FAILURE, payload: err.response })})
//     }
// }

// export const REMOVE_STORIES_DATA_START = 'REMOVE_STORIES_DATA_START'
// export const REMOVE_STORIES_DATA_SUCCESS = 'REMOVE_STORIES_DATA_SUCCESS'
// export const REMOVE_STORIES_DATA_FAILURE = 'REMOVE_STORIES_DATA_FAILURE'

// export function deleteStory(id) {
//     return dispatch => {
//         dispatch({ type: REMOVE_STORIES_DATA_START })
//         api()
//         .delete(`/stories/${id}`)
//         .then(res => {
//             dispatch({ type: REMOVE_STORIES_DATA_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({ type: REMOVE_STORIES_DATA_FAILURE, payload: err.response })
//         })
//     }
// }

// export const EDIT_STORIES_DATA_START = 'EDIT_STORIES_DATA_START'
// export const EDIT_STORIES_DATA_SUCCESS = 'EDIT_STORIES_DATA_SUCCESS'
// export const EDIT_STORIES_DATA_FAILURE = 'EDIT_STORIES_DATA_FAILURE'

// export function editStory(id) {
//     return dispatch => {
//         dispatch({ type: EDIT_STORIES_DATA_START })
//         const obj = { title: '', contents: ''}
//         api()
//         .put(`/stories/${id}`, obj)
//         .then(res => {
//             dispatch({ type: EDIT_STORIES_DATA_SUCCESS, payload: res.data })
//         })
//         .catch(err => {
//             dispatch({ type: EDIT_STORIES_DATA_FAILURE, payload: err.response })
//         })
//     }
// }