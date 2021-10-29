import React from 'react';
import { Row } from 'react-bootstrap';
import './Services.css'

import ServiceCard from './ServiceCard';
import { useState } from "react";
import { useEffect } from 'react';


const Services = () => {
    const [services, setServices] = useState([]);
    // loading data from database 
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='services'>
            <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-1">
                    Our <span className="text-danger"> Service's </span>
                </h1>
                <Row xs={1} md={3} className="g-3 ">
                    {
                        services.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        >
                        </ServiceCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;