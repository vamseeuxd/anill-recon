
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
    
    export function getPlan_StatusList() {
        return {type: GET_PLAN_STATUS_LIST}
    }
    
    export function getPlan_StatusListSuccess(list) {
        return {type: GET_PLAN_STATUS_LIST_SUCCESS, payload: {list}}
    }

    export function selectedPlan_StatusListSuccess(list) {
        return {type: SELECTED_PLAN_STATUS_LIST, payload: {list}}
    }
    
    export function getPlan_StatusListError(error) {
        return {type: GET_PLAN_STATUS_LIST_ERROR, payload: {error}}
    }
    
    export function updatePlan_StatusList() {
        return {type: UPDATE_PLAN_STATUS_LIST, payload: null}
    }
    
    export function updatePlan_StatusListSuccess(list) {
        return {type: UPDATE_PLAN_STATUS_LIST_SUCCESS, payload: {list}}
    }
    
    export function upodatePlan_StatusListError(error) {
        return {type: UPDATE_PLAN_STATUS_LIST_ERROR, payload: {error}}
    }
    
    export function deletePlan_StatusList() {
        return {type: DELETE_PLAN_STATUS_LIST, payload: null}
    }
    
    export function deletePlan_StatusListSuccess(list) {
        return {type: DELETE_PLAN_STATUS_LIST_SUCCESS, payload: {list}}
    }
    
    export function deletePlan_StatusListError(error) {
        return {type: DELETE_PLAN_STATUS_LIST_ERROR, payload: {error}}
    }
