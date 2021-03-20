
    import {
        DELETE_TASK_PROGRESS_LIST, 
        DELETE_TASK_PROGRESS_LIST_ERROR, 
        DELETE_TASK_PROGRESS_LIST_SUCCESS,
        GET_TASK_PROGRESS_LIST,
        GET_TASK_PROGRESS_LIST_ERROR,
        GET_TASK_PROGRESS_LIST_SUCCESS,
        UPDATE_TASK_PROGRESS_LIST, 
        UPDATE_TASK_PROGRESS_LIST_ERROR,
        UPDATE_TASK_PROGRESS_LIST_SUCCESS
    } from "./task_progress-constants";
    
    export function getTask_progressList() {
        return {type: GET_TASK_PROGRESS_LIST}
    }
    
    export function getTask_progressListSuccess(list) {
        return {type: GET_TASK_PROGRESS_LIST_SUCCESS, payload: {list}}
    }
    
    export function getTask_progressListError(error) {
        return {type: GET_TASK_PROGRESS_LIST_ERROR, payload: {error}}
    }
    
    export function updateTask_progressList() {
        return {type: UPDATE_TASK_PROGRESS_LIST, payload: null}
    }
    
    export function updateTask_progressListSuccess(list) {
        return {type: UPDATE_TASK_PROGRESS_LIST_SUCCESS, payload: {list}}
    }
    
    export function upodateTask_progressListError(error) {
        return {type: UPDATE_TASK_PROGRESS_LIST_ERROR, payload: {error}}
    }
    
    export function deleteTask_progressList() {
        return {type: DELETE_TASK_PROGRESS_LIST, payload: null}
    }
    
    export function deleteTask_progressListSuccess(list) {
        return {type: DELETE_TASK_PROGRESS_LIST_SUCCESS, payload: {list}}
    }
    
    export function deleteTask_progressListError(error) {
        return {type: DELETE_TASK_PROGRESS_LIST_ERROR, payload: {error}}
    }