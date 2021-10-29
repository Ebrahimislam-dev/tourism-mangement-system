import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <>
            <Carousel fade className="slide-item">
                <Carousel.Item interval={1000} >
                    <Carousel.Caption >
                        <div className="  pe-5 pb-5 mb-5 text-center">
                            <h1 className=" text-black-50 headingBanner">WELCOME TO ISLAMI HEALTH CARE</h1>
                            <p className="fs-4 px-3 text-danger fw-bold fst-italic">We are team of talented doctors making your life happiness</p>
                        </div>
                        <div className="  pb-5 mb-5 me-5 text-center">
                            <Button className="btn btn-danger px-3 py-2 fw-bold">GET STARTED</Button>
                        </div>

                    </Carousel.Caption>
                    <img
                        className="d-block w-100 slide-item"
                        src=""
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500} >
                    <Carousel.Caption >
                        <div className="pb-md-5 mb-md-5 text-center">
                            <h1 className="fs-md-1 text-success">LET US PROTECT YOUR HEALTH</h1>
                            <Button className="btn btn-success">Read More</Button>

                        </div>


                    </Carousel.Caption>
                    <img
                        className="d-block w-100 slide-item"
                        src=""
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-success fs-md-1">BEST DOCTOR'S SUPPORT</h2>

                        <Button className="btn btn-success">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-success">SUPPORT BETTER PATIENT SERVICES</h3>

                        <Button className="btn btn-success">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};
export default Banner;