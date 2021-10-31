import React from 'react';
import AddService from '../home/addservice/AddService';
import ManageServices from '../home/manageServices/ManageServices';
import './Admin.css'
import { Accordion } from "react-bootstrap";
import ManageAllOrder from '../home/ManageAllOrder/ManageAllOrder';
// import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <div className="row admin-bg">
                <div className="col-8 col-md-5 mx-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2 className="fs-2 fst-italic ms-5">Add <span className="text-danger mx-2"> A </span>Service</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <AddService></AddService>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
                <div className="col-8 col-md-5 mx-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2 className="fs-2 fst-italic ms-5">Manage<span className="text-danger mx-2"> Services</span> </h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ManageServices></ManageServices>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
                <div className="col-12 col-md-10 mx-md-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2 className="fs-2 fst-italic ms-5">Manage<span className="text-danger mx-2"> All</span>Orders </h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ManageAllOrder></ManageAllOrder>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion> 
                    {/* <Link to="manageallorders"><button className="btn btn-danger">Manage all Orders</button></Link> */}
                </div>

            </div>


        </div>

    );
};

export default Admin;