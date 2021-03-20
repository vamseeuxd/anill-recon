import React, {useState} from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import './Inventory.scss';
import {Nav} from 'react-bootstrap';
import {useSelector} from "react-redux";


export function Inventory() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const vehicleList = useSelector(state => state.vehicleList.list);
    const task_types = useSelector(state => state.task_types.list);
    const assigned_to = useSelector(state => state.assigned_to.list);
    const more = useSelector(state => state.more.list);
    const plan_status = useSelector(state => state.plan_status.list);
    const task_progress = useSelector(state => state.task_progress.list);
    return (
        <>
            <div className="main-container container-fluid">
                <div className="d-flex flex-column flex-md-row">
                    <div style={{width: "70px"}} className="ms-2 d-inline-block mt-2 me-3 pt-2 fw-bold">
                        <label>Filters</label>
                    </div>
                    <div className="d-inline-block mt-2 me-2">
                        <DropdownMultiselect buttonClass="bg-white shadow-sm pe-3" placeholder="Plan Status" options={plan_status} name="PlanStatus"/>
                    </div>
                    <div className="d-inline-block mt-2 me-2">
                        <DropdownMultiselect buttonClass="bg-white shadow-sm pe-3" placeholder="Task Type" options={task_types} name="TaskType"/>
                    </div>
                    <div className="d-inline-block mt-2 me-2">
                        <DropdownMultiselect buttonClass="bg-white shadow-sm pe-3" placeholder="Task Progress" options={task_progress} name="TaskProgress"/>
                    </div>
                    <div className="d-inline-block mt-2 me-2">
                        <DropdownMultiselect buttonClass="bg-white shadow-sm pe-3" placeholder="Assigned To" options={assigned_to} name="AssignedTo"/>
                    </div>
                    <div className="d-inline-block mt-2 me-2">
                        <DropdownMultiselect buttonClass="bg-white shadow-sm pe-3" placeholder="More(1)" options={more} name="More"/>
                    </div>
                    <div className="d-inline-block mt-2 me-2 ms-auto">
                        <input placeholder="Search" className="form-control border-0 shadow-sm pe-3"/>
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row">
                    <div style={{width: "70px"}} className="ms-2 d-inline-block mt-2 me-3 pt-1 fw-bold">
                        <label>Applied</label>
                    </div>
                    <div className="d-inline-block mt-2 me-3 fw-bold">
                        <label className="w-100 text-center shadow-sm bg-white text-dark p-1 ps-4 pe-4 rounded-pill">Vehicle Status: Active<i className="bm ms-2 fa fa-close"/></label>
                    </div>
                    <div className="d-inline-block mt-2 fw-bold">
                        <label className="bm w-100 text-center bg-transparent text-danger p-1 rounded-pill">Reset Filters</label>
                    </div>
                </div>

                <ul className="list-group bg-transparent mb-5">
                    {vehicleList.map(d => {
                        return (
                            <li key={'key-' + d} className="list-group-item border-0 pb-1 mb-1 bg-transparent">
                                <div className="row bg-white shadow-sm">
                                    <div className="col-md-2 col-12 border-bottom border-end text-center">
                                        <img alt="Demo POC" className="car-image" src="./images/BMW.png"/>
                                    </div>
                                    <div className="col-md-4 col-12 order-md-last text-center">
                                        {/* ----------------------------------------------------------------- */}
                                        <ul className="list-group">
                                            {[1, 2].map(d => (
                                                <li key={'key' + d} className="list-group-item border-0">
                                                    <div className="d-flex w-100">
                                                        <h6 className="mb-1">
                                                            <small style={{fontSize: "10px"}} className="bg-dark text-white p-1 rounded-circle">MU</small>&nbsp; Manager User</h6>
                                                            <small className="ms-auto">3d ago</small>
                                                    </div>
                                                    <div className="text-muted ps-4 mb-1 w-100 text-start">&nbsp; text 4</div>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-danger p-0 m-0 fw-bold mb-2">Create a Note</p>
                                        {/* ----------------------------------------------------------------- */}
                                    </div>
                                    <div className="col-md-6 border-end border-top py-0 px-0">
                                        {/* Top -Row */}
                                        <div className="w-100 border-bottom">
                                            <h5 className="ps-3 pt-1 m-0 bm" onClick={() => {setOpenDrawer(!openDrawer);}}>2020 Lexus Vl 705 ES 350</h5>
                                            <div className="text-secondary mt-2 ps-0 mb-2">
                                                <span className="d-md-inline-block d-block pe-3 border-end ps-3">CFE74A1B</span>
                                                <span className="d-md-inline-block d-block pe-3 border-end ps-3">VIRECCFE74A1BV40</span>
                                                <span className="d-md-inline-block d-block pe-3 border-end ps-3">10,023 mi</span>
                                                <span className="d-md-inline-block d-block pe-3 ps-3">Age: 102 days</span>
                                            </div>
                                        </div>
                                        {/* Bottom -Row */}
                                        <div className="w-100">
                                            <div className="row">
                                                {/* Left Column */}
                                                <div className="col-12 col-md-6 border-end">
                                                    <div className="d-flex mt-2 mb-2">
                                                        <div><i className="border-dark border p-1 rounded-circle fa fa-check m-3 mt-0 me-0" aria-hidden="true"/></div>
                                                        <div>
                                                            <p className="m-0 p-0 ps-3 fw-bold">Front Line Ready<span className="fw-normal text-muted ps-2">(2 of 2)</span></p>
                                                            <p className="m-0 p-0 ps-3">Fri, Dec 11, 2020 at 12:10 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Right Column */}
                                                <div className="col-12 col-md-6">
                                                    <div className="d-flex mt-2 mb-2">
                                                        <div><i className="p-1 fa fa-list m-3 mt-0 me-0" aria-hidden="true"/></div>
                                                        <div>
                                                            <p className="m-0 p-0 ps-3 fw-bold">Recon Plan</p>
                                                            <p className="m-0 p-0 ps-3">$4,321</p>
                                                            <p className="m-0 p-0 ps-3">Recon Time 9d 11h</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={openDrawer ? "slider open" : "slider"}>
                <div className={openDrawer ? "shadow-lg slider-content open" : "shadow-lg slider-content"}>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="w-100 pt-md-5 d-block text-center border-bottom border-end">
                            <img alt="Demo POC" className="car-image pe-2 ms-3" src="./images/BMW.png"/>
                        </div>
                        <div className="w-100 pt-md-5 border-bottom border-end">
                            <h5 className="ps-3 pt-1 m-0 bm"> 2020 Lexus Vl 705 ES 350 </h5>
                            <div className="text-secondary mt-2 ps-0 mb-2">
                                <span className="d-block pe-3 ps-3">CFE74A1B</span>
                                <span className="d-block pe-3 ps-3">VIRECCFE74A1BV40</span>
                                <span className="d-block pe-3 ps-3">10,023 mi</span>
                            </div>
                        </div>
                        <div className="w-100 pt-md-5 d-block text-center border-bottom">
                            <i style={{fontSize: "40px"}} className="mt-2 mb-2 fa fa-map-marker"/>
                            <p>No Loaction data has been recorded</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div style={{height: "calc(100vh - 210px)"}} className="border-end w-50 d-md-block d-none">
                            <h5 className="text-center mt-3">Recon Plan</h5>
                        </div>

                        <div className="w-50 d-md-block d-none">
                            <h5 className="text-center mt-3">Activity</h5>
                        </div>

                        <div className="d-md-none w-100 mt-2">
                            <Nav justify variant="tabs" defaultActiveKey="/home">
                                <Nav.Item><Nav.Link eventKey="link-1">Recon Plan</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="link-2">Activity</Nav.Link></Nav.Item>
                            </Nav>
                        </div>

                    </div>

                    <i className="fa fa-close close-button bm" onClick={() => {
                        setOpenDrawer(!openDrawer);
                    }}
                    />
                </div>
            </div>
        </>
    );
}
