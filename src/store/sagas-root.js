// eslint-disable-next-line no-unused-vars
import {all, fork} from "redux-saga/effects";
import {moreSagas} from "../pages/inventory/store/more/more-saga";
import {carsSagas} from "../pages/cars/store/cars/cars-saga";

export default function* rootSaga() {
    yield all([
        fork(moreSagas),
        fork(carsSagas)
    ])
}
