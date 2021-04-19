import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderMain.css'
import top from '../../../images/top image.jpg'
import Header from '../../HomeComponents/Header/Header';

const HeaderMain = () => {
    return (
        <section className="header-main bannerSection" >
            <div className="container">
                <Header />
                <div className="row d-flex align-items-center header-main-content p-5 ">
                    <div className="col-md-6 col-12 col-sm-6 text-white">
                        <h1 >Professional Building Of Your Vision </h1>
                        <h5>Service You Can Trust</h5>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Button className="HireUsButton">Hire Us</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;