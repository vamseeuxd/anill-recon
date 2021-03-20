const fs = require('fs');
const storeName = 'Cars'
const storeNameSmall = 'cars'
const storeNameCapital = 'Cars'
const storeNameUpper = 'CARS'
const storeNameSnakeCase = 'cars'
const dir = 'C:\\Users\\Vamsee Kalyan S\\WebstormProjects\\anil-recon\\src\\pages\\cars\\store';
if (!fs.existsSync(dir.toLowerCase())) {
    fs.mkdirSync(dir.toLowerCase());
}
if (!fs.existsSync(dir.toLowerCase() + '/' + storeNameSnakeCase)) {
    fs.mkdirSync(dir.toLowerCase() + '/' + storeNameSnakeCase);
}

const filesToCreate = ['-reducer.js', '-actions.js', '-constants.js', '-selectors.js', '-saga.js'];

filesToCreate.forEach(value => {
    if (!fs.existsSync(dir + '/' + storeNameSnakeCase + '/' + storeNameSnakeCase + value)) {
        fs.writeFile(dir + '/' + storeNameSnakeCase + '/' + storeNameSnakeCase + value, getContent(value), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
})

function getContent(type) {
    switch (type) {
        case '-reducer.js': {
            return getReducerContent(storeName);
        }
        case '-actions.js': {
            return getActionsContent(storeName);
        }
        case '-constants.js': {
            return getConstantsContent(storeName);
        }
        case '-selectors.js': {
            return '// in progress ....';
        }
        case '-saga.js': {
            return getSagaContent(storeName);
        }
    }
}

function getReducerContent(name) {
    return `
    import {
        DELETE_${storeNameUpper}_LIST,
        DELETE_${storeNameUpper}_LIST_ERROR,
        DELETE_${storeNameUpper}_LIST_SUCCESS,
        GET_${storeNameUpper}_LIST,
        GET_${storeNameUpper}_LIST_ERROR,
        GET_${storeNameUpper}_LIST_SUCCESS,
        SELECTED_${storeNameUpper}_LIST,
        UPDATE_${storeNameUpper}_LIST,
        UPDATE_${storeNameUpper}_LIST_ERROR,
        UPDATE_${storeNameUpper}_LIST_SUCCESS
    } from "./${storeNameSnakeCase}-constants";
    
    const initialState = {
        list: [],
        loading: false,
        selectedItems: [],
        error: null,
    }
    
    export function ${storeNameSmall}Reducer(state = initialState, action) {
        switch (action.type) {
            case GET_${storeNameUpper}_LIST: {
                return {...state, loading: true, error: null}
            }
            case GET_${storeNameUpper}_LIST_SUCCESS: {
                return {...state, list: action.payload.list, loading: false, error: null}
            }
            case GET_${storeNameUpper}_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case SELECTED_${storeNameUpper}_LIST: {
                return {...state, selectedItems: action.payload.list, loading: false, error: null}
            }
            case UPDATE_${storeNameUpper}_LIST: {
                return {...state, loading: true, error: null}
            }
            case UPDATE_${storeNameUpper}_LIST_SUCCESS: {
                return {...state, list: action.payload.list, loading: false, error: null}
            }
            case UPDATE_${storeNameUpper}_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            case DELETE_${storeNameUpper}_LIST: {
                return {...state, loading: true, error: null}
            }
            case DELETE_${storeNameUpper}_LIST_SUCCESS: {
                return {...state, list: action.payload.list, loading: false, error: null}
            }
            case DELETE_${storeNameUpper}_LIST_ERROR: {
                return {...state, loading: false, error: action.payload.error}
            }
            default:
                return state
        }
    }
    `
}

function getConstantsContent(name) {
    return `
    export const GET_${storeNameUpper}_LIST = 'GET_${storeNameUpper}_LIST';
    export const GET_${storeNameUpper}_LIST_SUCCESS = 'GET_${storeNameUpper}_LIST_SUCCESS';
    export const GET_${storeNameUpper}_LIST_ERROR = 'GET_${storeNameUpper}_LIST_ERROR';
    export const SELECTED_${storeNameUpper}_LIST = 'SELECTED_${storeNameUpper}_LIST';
    export const UPDATE_${storeNameUpper}_LIST = 'UPDATE_${storeNameUpper}_LIST';
    export const UPDATE_${storeNameUpper}_LIST_SUCCESS = 'UPDATE_${storeNameUpper}_LIST_SUCCESS';
    export const UPDATE_${storeNameUpper}_LIST_ERROR = 'UPDATE_${storeNameUpper}_LIST_ERROR';
    export const DELETE_${storeNameUpper}_LIST = 'DELETE_${storeNameUpper}_LIST';
    export const DELETE_${storeNameUpper}_LIST_SUCCESS = 'DELETE_${storeNameUpper}_LIST_SUCCESS';
    export const DELETE_${storeNameUpper}_LIST_ERROR = 'DELETE_${storeNameUpper}_LIST_ERROR';
    `;
}

function getActionsContent(name) {
    return `
    import {
        DELETE_${storeNameUpper}_LIST,
        DELETE_${storeNameUpper}_LIST_ERROR,
        DELETE_${storeNameUpper}_LIST_SUCCESS,
        GET_${storeNameUpper}_LIST,
        GET_${storeNameUpper}_LIST_ERROR,
        GET_${storeNameUpper}_LIST_SUCCESS,
        SELECTED_${storeNameUpper}_LIST,
        UPDATE_${storeNameUpper}_LIST,
        UPDATE_${storeNameUpper}_LIST_ERROR,
        UPDATE_${storeNameUpper}_LIST_SUCCESS
    } from "./${storeNameSnakeCase}-constants";
    
    export function get${storeNameCapital}List() {
        return {type: GET_${storeNameUpper}_LIST}
    }
    
    export function get${storeNameCapital}ListSuccess(list) {
        return {type: GET_${storeNameUpper}_LIST_SUCCESS, payload: {list}}
    }
    
    export function selected${storeNameCapital}List(list) {
        return {type: SELECTED_${storeNameUpper}_LIST, payload: {list}}
    }
    
    export function get${storeNameCapital}ListError(error) {
        return {type: GET_${storeNameUpper}_LIST_ERROR, payload: {error}}
    }
    
    export function update${storeNameCapital}List() {
        return {type: UPDATE_${storeNameUpper}_LIST, payload: null}
    }
    
    export function update${storeNameCapital}ListSuccess(list) {
        return {type: UPDATE_${storeNameUpper}_LIST_SUCCESS, payload: {list}}
    }
    
    export function update${storeNameCapital}ListError(error) {
        return {type: UPDATE_${storeNameUpper}_LIST_ERROR, payload: {error}}
    }
    
    export function delete${storeNameCapital}List() {
        return {type: DELETE_${storeNameUpper}_LIST, payload: null}
    }
    
    export function delete${storeNameCapital}ListSuccess(list) {
        return {type: DELETE_${storeNameUpper}_LIST_SUCCESS, payload: {list}}
    }
    
    export function delete${storeNameCapital}ListError(error) {
        return {type: DELETE_${storeNameUpper}_LIST_ERROR, payload: {error}}
    }
    `
}

function getSagaContent(name) {
    return `
    import {delay} from "redux-saga/effects";
    import {put, takeLatest} from "redux-saga/effects";
    import {DELETE_${storeNameUpper}_LIST, GET_${storeNameUpper}_LIST, UPDATE_${storeNameUpper}_LIST} from "./${storeNameSnakeCase}-constants";
    import {
        // eslint-disable-next-line no-unused-vars
        delete${storeNameCapital}ListError,
        delete${storeNameCapital}ListSuccess,
        // eslint-disable-next-line no-unused-vars
        get${storeNameCapital}ListError,
        get${storeNameCapital}ListSuccess,
        // eslint-disable-next-line no-unused-vars
        update${storeNameCapital}ListError,
        update${storeNameCapital}ListSuccess
    } from "./${storeNameSnakeCase}-actions";
    
    function* get${storeNameCapital}List() {
        yield delay(4000);
        yield put(get${storeNameCapital}ListSuccess(["${storeNameCapital} 1"]));
        /*try {
            const data = yield call(fetchData);
            yield put(get${storeNameCapital}ListSuccess(data));
        } catch (e) {
            yield put(get${storeNameCapital}ListError(e));
        }*/
    }
    
    function* update${storeNameCapital}List() {
        yield delay(4000);
        yield put(update${storeNameCapital}ListSuccess(["${storeNameCapital} 1", "${storeNameCapital} 2", "${storeNameCapital} 3", "${storeNameCapital} 4", "${storeNameCapital} 5"]));
        /*try {
            const data = yield call(fetchData);
            yield put(update${storeNameCapital}ListSuccess(data));
        } catch (e) {
            yield put(update${storeNameCapital}ListError(e));
        }*/
    }
    
    function* delete${storeNameCapital}List() {
        yield delay(4000);
        yield put(delete${storeNameCapital}ListSuccess(["${storeNameCapital} 1", "${storeNameCapital} 2"]));
        /*try {
            const data = yield call(fetchData);
            yield put(delete${storeNameCapital}ListSuccess(data));
        } catch (e) {
            yield put(delete${storeNameCapital}ListError(e));
        }*/
    }
    
    export function* ${storeNameSmall}Sagas() {
        yield takeLatest(GET_${storeNameUpper}_LIST, get${storeNameCapital}List);
        yield takeLatest(UPDATE_${storeNameUpper}_LIST, update${storeNameCapital}List);
        yield takeLatest(DELETE_${storeNameUpper}_LIST, delete${storeNameCapital}List);
    }
`;
}
