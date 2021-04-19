import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
    
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-footer-item">
                            <div className="logo">
                                <h2><a href="#"><span>HANDYMAN </span> SERVICES</a></h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat itaque aliquid minus totam vitae nemo iusto, laudantium iure necessitatibus asperiores!</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="quick-links">
                            <h3>Quick links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Book Online</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="quick-links">
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href="#">PLUMBING</a></li>
                                <li><a href="#">ELECTRICAL</a></li>
                                <li><a href="#">CARPENTRY</a></li>
                                <li><a href="#">DECORATING</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="quick-links">
                            <h3>Social links</h3>
                            <ul className="social-icons list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon   className="icon active-icon" icon={faFacebookF} /></a></li> 
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="footer-text text-center p-3">
                            <p className="m-0">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;