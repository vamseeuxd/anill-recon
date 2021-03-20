import {
    DELETE_VEHICLE_LIST,
    DELETE_VEHICLE_LIST_ERROR,
    DELETE_VEHICLE_LIST_SUCCESS,
    GET_VEHICLE_LIST,
    GET_VEHICLE_LIST_ERROR,
    GET_VEHICLE_LIST_SUCCESS, SELECTED_VEHICLE_LIST,
    UPDATE_VEHICLE_LIST,
    UPDATE_VEHICLE_LIST_ERROR,
    UPDATE_VEHICLE_LIST_SUCCESS
} from "./vehicle_list-constants";

const initialState = {
    list: ["Vehicle 1", "Vehicle 2", "Vehicle 3", "Vehicle 4", "Vehicle 5"],
    loading: false,
    selectedItems: [],
    error: null,
}

export function vehicleListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLE_LIST: {
            return {...state, loading: true, error: null}
        }
        case GET_VEHICLE_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case GET_VEHICLE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case UPDATE_VEHICLE_LIST: {
            return {...state, loading: true, error: null}
        }
        case UPDATE_VEHICLE_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case SELECTED_VEHICLE_LIST: {
            return {...state, selectedItems: action.payload.list, loading: false, error: null}
        }
        case UPDATE_VEHICLE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        case DELETE_VEHICLE_LIST: {
            return {...state, loading: true, error: null}
        }
        case DELETE_VEHICLE_LIST_SUCCESS: {
            return {list: action.payload.list, loading: false, error: null}
        }
        case DELETE_VEHICLE_LIST_ERROR: {
            return {...state, loading: false, error: action.payload.error}
        }
        default:
            return state
    }
}
