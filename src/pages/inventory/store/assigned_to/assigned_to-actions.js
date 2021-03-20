
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
    
    export function getAssigned_toList() {
        return {type: GET_ASSIGNED_TO_LIST}
    }
    
    export function getAssigned_toListSuccess(list) {
        return {type: GET_ASSIGNED_TO_LIST_SUCCESS, payload: {list}}
    }

    export function selectedAssigned_toList(list) {
        return {type: SELECTED_ASSIGNED_TO_LIST, payload: {list}}
    }
    
    export function getAssigned_toListError(error) {
        return {type: GET_ASSIGNED_TO_LIST_ERROR, payload: {error}}
    }
    
    export function updateAssigned_toList() {
        return {type: UPDATE_ASSIGNED_TO_LIST, payload: null}
    }
    
    export function updateAssigned_toListSuccess(list) {
        return {type: UPDATE_ASSIGNED_TO_LIST_SUCCESS, payload: {list}}
    }
    
    export function upodateAssigned_toListError(error) {
        return {type: UPDATE_ASSIGNED_TO_LIST_ERROR, payload: {error}}
    }
    
    export function deleteAssigned_toList() {
        return {type: DELETE_ASSIGNED_TO_LIST, payload: null}
    }
    
    export function deleteAssigned_toListSuccess(list) {
        return {type: DELETE_ASSIGNED_TO_LIST_SUCCESS, payload: {list}}
    }
    
    export function deleteAssigned_toListError(error) {
        return {type: DELETE_ASSIGNED_TO_LIST_ERROR, payload: {error}}
    }
