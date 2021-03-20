import {combineReducers} from 'redux';

import {vehicleListReducer} from "../pages/inventory/store/vehicle_list/vehicle_list-reducer";
import {task_typeReducer} from "../pages/inventory/store/task_type/task_type-reducer";
import {assigned_toReducer} from "../pages/inventory/store/assigned_to/assigned_to-reducer";
import {moreReducer} from "../pages/inventory/store/more/more-reducer";
import {plan_statusReducer} from "../pages/inventory/store/plan_status/plan_status-reducer";
import {task_progressReducer} from "../pages/inventory/store/task_progress/task_progress-reducer";
import {carsReducer} from "../pages/cars/store/cars/cars-reducer";

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
    vehicleList: vehicleListReducer,
    task_types: task_typeReducer,
    assigned_to: assigned_toReducer,
    more: moreReducer,
    plan_status: plan_statusReducer,
    task_progress: task_progressReducer,
    cars: carsReducer,
});

export default rootReducer;

/*
    vehicle-list-reducer
    vehicle-list-actions
    vehicle-list-constants
    vehicle-list-selectors
    vehicle-list-saga
*/
