import {
    DELETE_MORE_LIST,
    DELETE_MORE_LIST_ERROR,
    DELETE_MORE_LIST_SUCCESS,
    GET_MORE_LIST,
    GET_MORE_LIST_ERROR,
    GET_MORE_LIST_SUCCESS,
    SELECTED_MORE_LIST,
    UPDATE_MORE_LIST,
    UPDATE_MORE_LIST_ERROR,
    UPDATE_MORE_LIST_SUCCESS
} from "./more-constants";

export function getMoreList() {
    return {type: GET_MORE_LIST}
}

export function getMoreListSuccess(list) {
    return {type: GET_MORE_LIST_SUCCESS, payload: {list}}
}

export function selectedMoreList(list) {
    return {type: SELECTED_MORE_LIST, payload: {list}}
}

export function getMoreListError(error) {
    return {type: GET_MORE_LIST_ERROR, payload: {error}}
}

export function updateMoreList() {
    return {type: UPDATE_MORE_LIST, payload: null}
}

export function updateMoreListSuccess(list) {
    return {type: UPDATE_MORE_LIST_SUCCESS, payload: {list}}
}

export function updateMoreListError(error) {
    return {type: UPDATE_MORE_LIST_ERROR, payload: {error}}
}

export function deleteMoreList() {
    return {type: DELETE_MORE_LIST, payload: null}
}

export function deleteMoreListSuccess(list) {
    return {type: DELETE_MORE_LIST_SUCCESS, payload: {list}}
}

export function deleteMoreListError(error) {
    return {type: DELETE_MORE_LIST_ERROR, payload: {error}}
}
