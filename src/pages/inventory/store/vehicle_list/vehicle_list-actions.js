import {
    DELETE_VEHICLE_LIST,
    DELETE_VEHICLE_LIST_ERROR,
    DELETE_VEHICLE_LIST_SUCCESS,
    GET_VEHICLE_LIST,
    GET_VEHICLE_LIST_ERROR,
    GET_VEHICLE_LIST_SUCCESS, SELECTED_VEHICLE_LIST, SELECTED_VEHICLE_LIST_ERROR,
    UPDATE_VEHICLE_LIST,
    UPDATE_VEHICLE_LIST_ERROR,
    UPDATE_VEHICLE_LIST_SUCCESS
} from "./vehicle_list-constants";

export function getVehicle_ListList() {
    return {type: GET_VEHICLE_LIST}
}

export function getVehicle_ListListSuccess(list) {
    return {type: GET_VEHICLE_LIST_SUCCESS, payload: {list}}
}

export function getVehicle_ListListError(error) {
    return {type: GET_VEHICLE_LIST_ERROR, payload: {error}}
}

export function updateVehicle_ListList() {
    return {type: UPDATE_VEHICLE_LIST, payload: null}
}

export function updateVehicle_ListListSuccess(list) {
    return {type: UPDATE_VEHICLE_LIST_SUCCESS, payload: {list}}
}

export function upodateVehicle_ListListError(error) {
    return {type: UPDATE_VEHICLE_LIST_ERROR, payload: {error}}
}

export function deleteVehicle_ListList() {
    return {type: DELETE_VEHICLE_LIST, payload: null}
}

export function deleteVehicle_ListListSuccess(list) {
    return {type: DELETE_VEHICLE_LIST_SUCCESS, payload: {list}}
}

export function deleteVehicle_ListListError(error) {
    return {type: DELETE_VEHICLE_LIST_ERROR, payload: {error}}
}
export function selectedVehicle_List(error) {
    return {type: SELECTED_VEHICLE_LIST, payload: {error}}
}
