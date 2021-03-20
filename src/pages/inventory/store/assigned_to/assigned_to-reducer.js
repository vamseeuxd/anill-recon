
    import {
    DELETE_ASSIGNED_TO_LIST,
    DELETE_ASSIGNED_TO_LIST_ERROR,
    DELETE_ASSIGNED_TO_LIST_SUCCESS,
    GET_ASSIGNED_TO_LIST,
    GET_ASSIGNED_TO_LIST_ERROR,
    GET_ASSIGNED_TO_LIST_SUCCESS, SELECTED_ASSIGNED_TO_LIST,
    UPDATE_ASSIGNED_TO_LIST,
    UPDATE_ASSIGNED_TO_LIST_ERROR,
    UPDATE_ASSIGNED_TO_LIST_SUCCESS
} from "./assigned_to-constants";
    
    const initialState = {
        list: ["Assigned To 1", "Assigned To 2", "Assigned To 3", "Assigned To 4", "Assigned To 5"],
        loading: false,
    selectedItems: [],
        error: null,
    }
    export function assigned_toReducer(state = initialState, action) {
        switch (action.type) {
            case GET_ASSIGNED_TO_LIST: {
                return {...state, loading: true, error: null}
            }
            case GET_ASSIGNED_TO_LIST_SUCCESS: {
                return {list: action.payload.list, loading: false, error: null}
            }
            case GET_ASSIGNED_TO_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case SELECTED_ASSIGNED_TO_LIST: {
                return {...state, selectedItems: action.payload.list, loading: false, error: null}
            }
            case UPDATE_ASSIGNED_TO_LIST: {
                return {...state, loading: true, error: null}
            }
            case UPDATE_ASSIGNED_TO_LIST_SUCCESS: {
                return {list: action.payload.list, loading: false, error: null}
            }
            case UPDATE_ASSIGNED_TO_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case DELETE_ASSIGNED_TO_LIST: {
                return {...state, loading: true, error: null}
            }
            case DELETE_ASSIGNED_TO_LIST_SUCCESS: {
                return {list: action.payload.list, loading: false, error: null}
            }
            case DELETE_ASSIGNED_TO_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            default:
                return state
        }
    }
