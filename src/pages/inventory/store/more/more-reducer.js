import {
    DELETE_MORE_LIST,
    DELETE_MORE_LIST_ERROR,
    DELETE_MORE_LIST_SUCCESS,
    GET_MORE_LIST,
    GET_MORE_LIST_ERROR,
    GET_MORE_LIST_SUCCESS,
    SELECTED_MORE_LIST,
    UPDATE_MORE_LIST,
    UPDATE_MORE_LIST_ERROR,
    UPDATE_MORE_LIST_SUCCESS
} from "./more-constants";

const initialState = {
    list: [],
    loading: false,
    selectedItems: [],
    error: null,
}

export function moreReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MORE_LIST: {
            return {...state, loading: true, error: null}
        }
        case GET_MORE_LIST_SUCCESS: {
            return {...state, list: action.payload.list, loading: false, error: null}
        }
        case GET_MORE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case SELECTED_MORE_LIST: {
            return {...state, selectedItems: action.payload.list, loading: false, error: null}
        }
        case UPDATE_MORE_LIST: {
            return {...state, loading: true, error: null}
        }
        case UPDATE_MORE_LIST_SUCCESS: {
            return {...state, list: action.payload.list, loading: false, error: null}
        }
        case UPDATE_MORE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case DELETE_MORE_LIST: {
            return {...state, loading: true, error: null}
        }
        case DELETE_MORE_LIST_SUCCESS: {
            return {...state, list: action.payload.list, loading: false, error: null}
        }
        case DELETE_MORE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        default:
            return state
    }
}
