import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <>
            <Carousel fade className="slide-item">
                <Carousel.Item interval={1000} >

                    <img
                        className="d-block w-100 slide-item"
                        src="https://i.ibb.co/LYpxfg0/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="row" >
                        <div className="banner col-md-4 w-50">
                            <div className="text-center">
                                <h1 className=" headingBanner">WELCOME TO TRAVEL MAMA</h1>
                                <p className="fs-5 px-3 fst-italic">We have the team of talented Tourist Guide's making your life happiness</p>
                            </div>
                            <div className="text-center mb-2">
                                <Button className="btn btn-danger px-3 py-2 fw-bold">GET STARTED</Button>
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} >
                    <Carousel.Caption className="row" >
                        <div className="banner col-md-4 w-50 mt-5">
                            <div className="text-center mx-5 my-5">
                                <h1 className=" headingBanner">Best Decision Ever</h1>
                                <h2 className="fs-5 px-3 fw-bold fst-italic"> No Risk , No Worries</h2>
                            </div>
                            <div className="text-center ">
                                <Button className="btn btn-info fs-5 mt-2 mb-3 px-3 py-2 fw-bold">GET STARTED</Button>
                            </div>
                        </div>

                    </Carousel.Caption>
                    <img
                        className="d-block w-100 slide-item"
                        src="https://i.ibb.co/zJg7nSd/banner2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/jrzYX2V/banner3.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="row" >
                        <div className=" col-md-4">

                        </div>
                        <div className="banner col-md-4 w-50 mt-5">
                            <div className="text-center">
                                <h1 className=" headingBanner">Explore Your Destination</h1>
                                <h2 className="fs-4 px-3 fw-bold fst-italic"> Experience It Live</h2>
                            </div>
                            <div className="text-center ">
                                <Button className="btn btn-warning mt-2 mb-3 px-3 py-2 fs-5 fw-bold">Explore It</Button>
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
};
export default Banner;