import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"

import { Link } from "react-router-dom";


const Header = () => {
    const { user, logOut } = useAuth()
    // active style for navbar
    const active = {
        fontWeight: "bold",
        color: "red",
        borderBlockStart: "3px solid #ff0000",
        borderBlockEnd: "1px solid #ff0000"
    };
    return (
        <Navbar sticky="top" className="header-bg p-0 m-0 " collapseOnSelect expand="lg">
            <Container className="p-0 m-0">
                <Navbar.Brand className="d-flex align-items-center justify-content-between">
                    <div className="w-100 ">
                        <Link to="/home"><img className="w-75" src="https://i.ibb.co/Wf0t24v/logo.png" alt="" /></Link>
                    </div>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            user.email && <div className="d-flex align-items-center">
                                <img className=" w-25 rounded-circle" src={user.photoURL} alt="" />
                                <span className='nav-item w-25 text-black   text-decoration-none fs-6 fst-italic'>{user.displayName}</span>

                            </div>
                        }

                        <NavLink to='/home' activeStyle={active} className='nav-item text-black   text-decoration-none'>
                            Home
                        </NavLink>
                        {/* Conditinal Nav Link */}
                        {
                            user.email && <NavLink to='/admin' activeStyle={active} className='nav-item text-black   text-decoration-none'>
                                Admin
                            </NavLink>}

                        {
                            user.email && <NavLink to='/myorders' activeStyle={active} className='nav-item text-black   text-decoration-none'>
                                My_Orders
                            </NavLink>
                        }





                        <NavLink to='/about' activeStyle={active} className='nav-item text-black   text-decoration-none'>
                            About_Us
                        </NavLink>
                        <NavLink to='/contact' activeStyle={active} className='nav-item text-black   text-decoration-none'>
                            Contact_Us
                        </NavLink>
                        <NavLink to='/faqs' activeStyle={active} className='nav-item text-black   text-decoration-none'>
                            FAQ's
                        </NavLink>



                    </Nav>
                    <Nav>
                        {/* show login and logout dynamically */}
                        {
                            user.email ?

                                <NavLink activeStyle={active} className='nav-item text-black   text-decoration-none' onClick={logOut} to="/login">LogOut <i class="fas fa-sign-out-alt"></i></NavLink>
                                :

                                <NavLink activeStyle={active} className='nav-item text-black   text-decoration-none' to="/login">LogIn<i class="fas fa-sign-in-alt"></i></NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;