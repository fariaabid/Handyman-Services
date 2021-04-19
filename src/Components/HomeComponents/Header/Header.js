import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {

    return (
        <div>
            <Navbar bg="light" expand="xl" className="py-4 text-white navbar">
                <Link to="/home">
                    <div className="d-flex align-items-center">
                        <div><img style={{width:'50px',height:'50px'}} src={logo} alt="" className="logo mx-3" /></div>
                        <div>
                            <h5>HANDY MAN <br/>SERVICES</h5>
                        </div>
                    </div>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto" >
                        <Link to="/home" className="header-link pr-3">Home</Link>
                        <Link to="#" className="header-link pr-3">Services</Link>
                        <Link to="#" className="header-link pr-3">Blog</Link>
                        <Link to="#" className="header-link pr-3">About</Link>
                        <Link to="/dashboard"   variant="dark" className="header-button pr-3">Book Online
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;