import {
    DELETE_TASK_TYPE_LIST,
    DELETE_TASK_TYPE_LIST_ERROR,
    DELETE_TASK_TYPE_LIST_SUCCESS,
    GET_TASK_TYPE_LIST,
    GET_TASK_TYPE_LIST_ERROR,
    GET_TASK_TYPE_LIST_SUCCESS,
    SELECTED_TASK_TYPE_LIST,
    UPDATE_TASK_TYPE_LIST,
    UPDATE_TASK_TYPE_LIST_ERROR,
    UPDATE_TASK_TYPE_LIST_SUCCESS
} from "./task_type-constants";

const initialState = {
    list: ["Task Type 1", "Task Type 2", "Task Type 3", "Task Type 4", "Task Type 5"],
    loading: false,
    selectedItems: [],
    error: null,
}

export function task_typeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASK_TYPE_LIST: {
            return {...state, loading: true, error: null}
        }
        case GET_TASK_TYPE_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case GET_TASK_TYPE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case SELECTED_TASK_TYPE_LIST: {
            return {...state, selectedItems: action.payload.list, loading: false, error: null}
        }
        case UPDATE_TASK_TYPE_LIST: {
            return {...state, loading: true, error: null}
        }
        case UPDATE_TASK_TYPE_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case UPDATE_TASK_TYPE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case DELETE_TASK_TYPE_LIST: {
            return {...state, loading: true, error: null}
        }
        case DELETE_TASK_TYPE_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case DELETE_TASK_TYPE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        default:
            return state
    }
}
