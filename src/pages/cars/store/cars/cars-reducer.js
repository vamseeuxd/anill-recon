
    import {
        DELETE_CARS_LIST,
        DELETE_CARS_LIST_ERROR,
        DELETE_CARS_LIST_SUCCESS,
        GET_CARS_LIST,
        GET_CARS_LIST_ERROR,
        GET_CARS_LIST_SUCCESS,
        SELECTED_CARS_LIST,
        UPDATE_CARS_LIST,
        UPDATE_CARS_LIST_ERROR,
        UPDATE_CARS_LIST_SUCCESS
    } from "./cars-constants";
    
    const initialState = {
        list: [],
        loading: false,
        selectedItems: [],
        error: null,
    }
    
    export function carsReducer(state = initialState, action) {
        switch (action.type) {
            case GET_CARS_LIST: {
                return {...state, loading: true, error: null}
            }
            case GET_CARS_LIST_SUCCESS: {
                return {...state, list: action.payload.list, loading: false, error: null}
            }
            case GET_CARS_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case SELECTED_CARS_LIST: {
                return {...state, selectedItems: action.payload.list, loading: false, error: null}
            }
            case UPDATE_CARS_LIST: {
                return {...state, loading: true, error: null}
            }
            case UPDATE_CARS_LIST_SUCCESS: {
                return {...state, list: action.payload.list, loading: false, error: null}
            }
            case UPDATE_CARS_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case DELETE_CARS_LIST: {
                return {...state, loading: true, error: null}
            }
            case DELETE_CARS_LIST_SUCCESS: {
                return {...state, list: action.payload.list, loading: false, error: null}
            }
            case DELETE_CARS_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            default:
                return state
        }
    }
    