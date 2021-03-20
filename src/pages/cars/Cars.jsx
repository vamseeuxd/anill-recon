import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {deleteCarsList, getCarsList, updateCarsList} from "./store/cars/cars-actions";

export function Cars() {
    const dispatch = useDispatch();
    const carStore = useSelector(state => state.cars);
    const loading = useSelector(state => state.cars.loading);
    return (
        <>
            {loading && <div style={{backgroundColor: 'rgba(0,0,0,0.2)'}}
                             className="fixed-top vh-100 vw-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="light"/>
            </div>}
            <div className="m-5">
                <h2 className="pt-5 mt-5">Cars</h2>
                <button onClick={()=>dispatch(getCarsList())} className="btn btn-primary me-3">Get</button>
                <button onClick={()=>dispatch(updateCarsList())} className="btn btn-danger me-3">Update</button>
                <button onClick={()=>dispatch(deleteCarsList())} className="btn btn-warning me-3">Delete</button>
                <pre> {JSON.stringify(carStore, null, 2)}</pre>
            </div>
        </>
    );

}
