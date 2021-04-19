import React from 'react';

const HomeClient = () => {
    const imgStyle = {
        width: '200px',
        height: '100px'
    }
    




    return (
        <section className="container my-5 pt-5">
            <h3 className="text-center my-5">Our <span  style={{ color: "#1CC7C1" }}>Top Clients'</span>  Are..</h3>
            <div className="row d-flex justify-content-around">
                <div className="client col-md-2 col-sm-2 offset-md-1 text-center">
                    <img src="https://i.ibb.co/HKJdcW3/work1.jpg" alt="slack" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.ibb.co/6sJM17d/work2.png" alt="google" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.ibb.co/nP50mPG/work3.jpg" alt="uber" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.ibb.co/5RCP4D4/work4.png" alt="netflix" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.ibb.co/1TMXvL8/work5.png" alt="airbnb" className="img-fluid my-2" style={imgStyle} />
                </div>

            </div>
        </section>
    );
};

export default HomeClient;