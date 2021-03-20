import {
    DELETE_TASK_PROGRESS_LIST,
    DELETE_TASK_PROGRESS_LIST_ERROR,
    DELETE_TASK_PROGRESS_LIST_SUCCESS,
    GET_TASK_PROGRESS_LIST,
    GET_TASK_PROGRESS_LIST_ERROR,
    GET_TASK_PROGRESS_LIST_SUCCESS, SELECTED_TASK_PROGRESS_LIST,
    UPDATE_TASK_PROGRESS_LIST,
    UPDATE_TASK_PROGRESS_LIST_ERROR,
    UPDATE_TASK_PROGRESS_LIST_SUCCESS
} from "./task_progress-constants";

const initialState = {
    list: ["Task Progress 1", "Task Progress 2", "Task Progress 3", "Task Progress 4", "Task Progress 5"],
    loading: false,
    selectedItems: [],
    error: null,
}

export function task_progressReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASK_PROGRESS_LIST: {
            return {...state, loading: true, error: null}
        }
        case GET_TASK_PROGRESS_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case GET_TASK_PROGRESS_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case SELECTED_TASK_PROGRESS_LIST: {
            return {...state, selectedItems: action.payload.list, loading: false, error: null}
        }

        case UPDATE_TASK_PROGRESS_LIST: {
            return {...state, loading: true, error: null}
        }
        case UPDATE_TASK_PROGRESS_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case UPDATE_TASK_PROGRESS_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case DELETE_TASK_PROGRESS_LIST: {
            return {...state, loading: true, error: null}
        }
        case DELETE_TASK_PROGRESS_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case DELETE_TASK_PROGRESS_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        default:
            return state
    }
}
