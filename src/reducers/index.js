import { GET_STORIES_DATA_START,GET_STORIES_DATA_SUCCESS, GET_STORIES_DATA_FAILURE, 
    GET_STORIES_PENDING_DATA_START,GET_STORIES_PENDING_DATA_SUCCESS,GET_STORIES_PENDING_DATA_FAILURE,
        //     POST_STORIES_DATA_START, POST_STORIES_DATA_SUCCESS, POST_STORIES_DATA_FAILURE, 
        //     REMOVE_STORIES_DATA_START, REMOVE_STORIES_DATA_SUCCESS, REMOVE_STORIES_DATA_FAILURE,
        //  EDIT_STORIES_DATA_START, EDIT_STORIES_DATA_SUCCESS, EDIT_STORIES_DATA_FAILURE 
        } from '../actions'

const initialState = {
    stories: [],
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_STORIES_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_STORIES_DATA_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isLoading: false
            }
        case GET_STORIES_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_STORIES_PENDING_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_STORIES_PENDING_DATA_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isLoading: false
                    }
        case GET_STORIES_PENDING_DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
        // case POST_STORIES_DATA_START:
        //     return {
        //         ...state,
        //         isPosting: true
        //     }
        // case POST_STORIES_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         stories: action.payload,
        //         isPosting: false
        //     }
        // case POST_STORIES_DATA_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         isPosting: false
        //     }
        // case REMOVE_STORIES_DATA_START:
        //     return {
        //         ...state 
        //     }
        // case REMOVE_STORIES_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         stories: action.payload
        //     }
        // case REMOVE_STORIES_DATA_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        // case EDIT_STORIES_DATA_START:
        //     return {
        //         ...state,
        //     }
        // case EDIT_STORIES_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         stories: action.payload
        //     }
        // case EDIT_STORIES_DATA_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
         default:
            return state
    }
}