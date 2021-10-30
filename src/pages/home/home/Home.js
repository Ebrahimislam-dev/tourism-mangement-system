import React from 'react';
import Banner from "./../banner/Banner";

import "./Home.css"
import Services from "./../Services/Services";
import Extrasections from '../ExtraSection/Extrasections';



const Home = () => {
    return (
        <div className=" container-fluid">
            <Banner></Banner>
            <div className="topbanner container-fluid ">
                <div className="container row  ">
                    <div className=" topheader col-12 col-md-8">
                        <h3 className=" fw-bold text-center  heading-top mt-5">Exploring the <br /> World. A great <br /> choice of tours.</h3>

                    </div>
                    <div className=" mt-5 col-12 col-md-4">
                        <img className="topheader w-100" src="https://i.ibb.co/Wf0t24v/logo.png" alt="" />

                    </div>
                </div>
            </div>
            <div>

            </div>


            <Services></Services>
           <Extrasections></Extrasections>


            {/* <QuickLinks></QuickLinks> */}

        </div>
    );
};

export default Home;