import React from 'react';
import { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);
    // loading data from database 
    useEffect(() => {
        setIsLoading(true);
        fetch('https://frozen-refuge-45390.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setOrders, setIsLoading]);
    
    const handleDelete = id => {
        const url = `https://frozen-refuge-45390.herokuapp.com/allorder/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    console.log(error);

                }

            })
    }

    return (
        <div>
            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                ) : (
                    <div className="container-fluid  mb-1">
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Order Name</th>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                    <th>Customer Address</th>
                                    <th>Customer Phone Number</th>
                                    <th>Order Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {orders?.map((order, index) => (
                                <tbody>
                                    <tr>
                                        <td >{index}</td>
                                        <td >{order?.name}</td>
                                        <td>{order?.displayName}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.address}</td>
                                        <td>{order?.phoneNo}</td>
                                        <td>{order?.date}</td>
                                        <button className="btn-outline-danger mt-1 mb-3 fw-bold px-3"  onClick={() => handleDelete(order._id)} >Delete</button>
                                        <button className="btn-outline-success p-2 mb-1 fw-bold">Approved</button>

                                    </tr>
                                </tbody>
                            ))}
                        </Table>

                    </div>
                )
            }
        </div>
    );
};

export default ManageAllOrder;