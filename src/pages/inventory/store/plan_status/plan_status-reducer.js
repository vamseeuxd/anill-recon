
    import {
    DELETE_PLAN_STATUS_LIST,
    DELETE_PLAN_STATUS_LIST_ERROR,
    DELETE_PLAN_STATUS_LIST_SUCCESS,
    GET_PLAN_STATUS_LIST,
    GET_PLAN_STATUS_LIST_ERROR,
    GET_PLAN_STATUS_LIST_SUCCESS, SELECTED_PLAN_STATUS_LIST,
    UPDATE_PLAN_STATUS_LIST,
    UPDATE_PLAN_STATUS_LIST_ERROR,
    UPDATE_PLAN_STATUS_LIST_SUCCESS
} from "./plan_status-constants";
    
    const initialState = {
        list: ["Plan Status 1", "Plan Status 2", "Plan Status 3", "Plan Status 4", "Plan Status 5"],
        loading: false,
    selectedItems: [],
    error: null,
    }
    export function plan_statusReducer(state = initialState, action) {
        switch (action.type) {
            case GET_PLAN_STATUS_LIST: {
                return {...state, loading: true, error: null}
            }
            case GET_PLAN_STATUS_LIST_SUCCESS: {
                return {list: action.payload.list, loading: false, error: null}
            }
            case GET_PLAN_STATUS_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case SELECTED_PLAN_STATUS_LIST: {
                return {...state, selectedItems: action.payload.list, loading: false, error: null}
            }
            case UPDATE_PLAN_STATUS_LIST: {
                return {...state, loading: true, error: null}
            }
            case UPDATE_PLAN_STATUS_LIST_SUCCESS: {
                return {list: action.payload.list, loading: false, error: null}
            }
            case UPDATE_PLAN_STATUS_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case DELETE_PLAN_STATUS_LIST: {
                return {...state, loading: true, error: null}
            }
            case DELETE_PLAN_STATUS_LIST_SUCCESS: {
                return {list: action.payload.list, loading: false, error: null}
            }
            case DELETE_PLAN_STATUS_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            default:
                return state
        }
    }
