
    import {delay} from "redux-saga/effects";
    import {put, takeLatest} from "redux-saga/effects";
    import {DELETE_CARS_LIST, GET_CARS_LIST, UPDATE_CARS_LIST} from "./cars-constants";
    import {
        // eslint-disable-next-line no-unused-vars
        deleteCarsListError,
        deleteCarsListSuccess,
        // eslint-disable-next-line no-unused-vars
        getCarsListError,
        getCarsListSuccess,
        // eslint-disable-next-line no-unused-vars
        updateCarsListError,
        updateCarsListSuccess
    } from "./cars-actions";
    
    function* getCarsList() {
        yield delay(1000);
        yield put(getCarsListSuccess(["Cars 1"]));
        /*try {
            const data = yield call(fetchData);
            yield put(getCarsListSuccess(data));
        } catch (e) {
            yield put(getCarsListError(e));
        }*/
    }
    
    function* updateCarsList() {
        yield delay(1000);
        yield put(updateCarsListSuccess(["Cars 1", "Cars 2", "Cars 3", "Cars 4", "Cars 5"]));
        /*try {
            const data = yield call(fetchData);
            yield put(updateCarsListSuccess(data));
        } catch (e) {
            yield put(updateCarsListError(e));
        }*/
    }
    
    function* deleteCarsList() {
        yield delay(1000);
        yield put(deleteCarsListSuccess(["Cars 1", "Cars 2"]));
        /*try {
            const data = yield call(fetchData);
            yield put(deleteCarsListSuccess(data));
        } catch (e) {
            yield put(deleteCarsListError(e));
        }*/
    }
    
    export function* carsSagas() {
        yield takeLatest(GET_CARS_LIST, getCarsList);
        yield takeLatest(UPDATE_CARS_LIST, updateCarsList);
        yield takeLatest(DELETE_CARS_LIST, deleteCarsList);
    }
