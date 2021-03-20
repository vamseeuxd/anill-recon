import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMoreList, getMoreList, updateMoreList} from "../inventory/store/more/more-actions";
import Spinner from "react-bootstrap/Spinner";

export function Tasks() {
    const moreList = useSelector(state => state.more);
    const loading = useSelector(state => state.more.loading);
    const dispatch = useDispatch();
    return (
        <>
            {loading && <div style={{backgroundColor: 'rgba(0,0,0,0.2)'}}
                  className="fixed-top vh-100 vw-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="light"/>
            </div>}
            <div className="m-5">
                <h2 className="pt-5 mt-5">Tasks</h2>
                <button onClick={() => dispatch(getMoreList())} className="btn btn-primary me-3">Get</button>
                <button onClick={() => dispatch(updateMoreList())} className="btn btn-danger me-3">Update</button>
                <button onClick={() => dispatch(deleteMoreList())} className="btn btn-warning me-3">Delete</button>
                <pre> {JSON.stringify(moreList, null, 2)}</pre>
            </div>
        </>
    );

}
