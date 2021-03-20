
    import {
    DELETE_TASK_TYPE_LIST,
    DELETE_TASK_TYPE_LIST_ERROR,
    DELETE_TASK_TYPE_LIST_SUCCESS,
    GET_TASK_TYPE_LIST,
    GET_TASK_TYPE_LIST_ERROR,
    GET_TASK_TYPE_LIST_SUCCESS, SELECTED_TASK_TYPE_LIST,
    UPDATE_TASK_TYPE_LIST,
    UPDATE_TASK_TYPE_LIST_ERROR,
    UPDATE_TASK_TYPE_LIST_SUCCESS
} from "./task_type-constants";
    
    export function getTask_TypeList() {
        return {type: GET_TASK_TYPE_LIST}
    }
    
    export function getTask_TypeListSuccess(list) {
        return {type: GET_TASK_TYPE_LIST_SUCCESS, payload: {list}}
    }

    export function selectedTask_TypeListSuccess(list) {
        return {type: SELECTED_TASK_TYPE_LIST, payload: {list}}
    }
    
    export function getTask_TypeListError(error) {
        return {type: GET_TASK_TYPE_LIST_ERROR, payload: {error}}
    }
    
    export function updateTask_TypeList() {
        return {type: UPDATE_TASK_TYPE_LIST, payload: null}
    }
    
    export function updateTask_TypeListSuccess(list) {
        return {type: UPDATE_TASK_TYPE_LIST_SUCCESS, payload: {list}}
    }
    
    export function upodateTask_TypeListError(error) {
        return {type: UPDATE_TASK_TYPE_LIST_ERROR, payload: {error}}
    }
    
    export function deleteTask_TypeList() {
        return {type: DELETE_TASK_TYPE_LIST, payload: null}
    }
    
    export function deleteTask_TypeListSuccess(list) {
        return {type: DELETE_TASK_TYPE_LIST_SUCCESS, payload: {list}}
    }
    
    export function deleteTask_TypeListError(error) {
        return {type: DELETE_TASK_TYPE_LIST_ERROR, payload: {error}}
    }
