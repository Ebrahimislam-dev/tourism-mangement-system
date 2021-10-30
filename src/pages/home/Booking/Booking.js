import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner,Button } from "react-bootstrap";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';





const Booking = () => {
    const { servicesId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://frozen-refuge-45390.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDetails(data)
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setDetails, setIsLoading]);
    //filter from json datas
    const singleService = details.filter(service => service._id === servicesId);
    // console.log(singleService);
    return (

        <div>
            {
                isLoading ? (
                    <Button variant="danger" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>


                ) : (
                    <div className="container-fluid  mb-1">
                        <h1 className="heading mb-5 mt-1">
                            <span className="text-danger"> {singleService[0]?.name} </span>
                        </h1>
                        <Row xs={1} md={2} className="g-3 ">
                            <div className="container-fluid">

                                <div className="container" >
                                    <Col>
                                        <Card className=" mb-5">
                                            <Card.Img variant="top" src={singleService[0]?.img} />
                                            <Card.Body>
                                                <Card.Title>{singleService[0]?.name}</Card.Title>
                                                <Card.Text>
                                                    <h5>
                                                        About Service: <small className="pb-3 fs-6 text-start"> {singleService[0]?.description}</small>
                                                    </h5>

                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Link to="/services">
                                                    <button className="btn btn-outline-dark px-5 border-2 rounded-4 fw-bold fst-italic">Book Another Service</button>
                                                </Link>
                                                <Link to="/myorders">
                                                    <button className="btn btn-outline-dark ms-3 px-5 border-2 rounded-4 fw-bold fst-italic">Confirm Booking</button>
                                                </Link>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                    </div>
                )
            }
        </div>



    );
};

export default Booking;