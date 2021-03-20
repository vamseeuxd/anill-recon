import {delay} from "redux-saga/effects";
import {put, takeLatest} from "redux-saga/effects";
import {DELETE_MORE_LIST, GET_MORE_LIST, UPDATE_MORE_LIST} from "./more-constants";
import {
    // eslint-disable-next-line no-unused-vars
    deleteMoreListError,
    deleteMoreListSuccess,
    // eslint-disable-next-line no-unused-vars
    getMoreListError,
    getMoreListSuccess,
    // eslint-disable-next-line no-unused-vars
    updateMoreListError,
    updateMoreListSuccess
} from "./more-actions";

function* getMoreList() {
    yield delay(4000);
    yield put(getMoreListSuccess(["More 1"]));
    /*try {
        const data = yield call(fetchData);
        yield put(getMoreListSuccess(data));
    } catch (e) {
        yield put(getMoreListError(e));
    }*/
}

function* updateMoreList() {
    yield delay(4000);
    yield put(updateMoreListSuccess(["More 1", "More 2", "More 3", "More 4", "More 5"]));
    /*try {
        const data = yield call(fetchData);
        yield put(updateMoreListSuccess(data));
    } catch (e) {
        yield put(updateMoreListError(e));
    }*/
}

function* deleteMoreList() {
    yield delay(4000);
    yield put(deleteMoreListSuccess(["More 1", "More 2"]));
    /*try {
        const data = yield call(fetchData);
        yield put(deleteMoreListSuccess([1, 2]));
    } catch (e) {
        yield put(deleteMoreListError(e));
    }*/
}

export function* moreSagas() {
    yield takeLatest(GET_MORE_LIST, getMoreList);
    yield takeLatest(UPDATE_MORE_LIST, updateMoreList);
    yield takeLatest(DELETE_MORE_LIST, deleteMoreList);
}
