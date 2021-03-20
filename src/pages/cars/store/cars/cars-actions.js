
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
    
    export function getCarsList() {
        return {type: GET_CARS_LIST}
    }
    
    export function getCarsListSuccess(list) {
        return {type: GET_CARS_LIST_SUCCESS, payload: {list}}
    }
    
    export function selectedCarsList(list) {
        return {type: SELECTED_CARS_LIST, payload: {list}}
    }
    
    export function getCarsListError(error) {
        return {type: GET_CARS_LIST_ERROR, payload: {error}}
    }
    
    export function updateCarsList() {
        return {type: UPDATE_CARS_LIST, payload: null}
    }
    
    export function updateCarsListSuccess(list) {
        return {type: UPDATE_CARS_LIST_SUCCESS, payload: {list}}
    }
    
    export function updateCarsListError(error) {
        return {type: UPDATE_CARS_LIST_ERROR, payload: {error}}
    }
    
    export function deleteCarsList() {
        return {type: DELETE_CARS_LIST, payload: null}
    }
    
    export function deleteCarsListSuccess(list) {
        return {type: DELETE_CARS_LIST_SUCCESS, payload: {list}}
    }
    
    export function deleteCarsListError(error) {
        return {type: DELETE_CARS_LIST_ERROR, payload: {error}}
    }
    