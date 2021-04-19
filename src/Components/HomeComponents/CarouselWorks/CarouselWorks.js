import React from 'react';
import './CarouselWorks.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselWorks = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="carousel-work">
      <h2 className="text-white text-center pt-5">Here are some of <span className="text-brand"> our works</span></h2>
      <Slider {...settings} className="py-5">
        <div className="d-flex justify-content-center my-5" >
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/X2pptKS/STUDIO.jpg" alt="slider1" className="img-fluid h-75 w-75" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/Xs685rQ/PANOROMA.jpg" alt="slider2" className="img-fluid h-75 w-75" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/JHrDTNr/office.jpg" alt="slider3" className="img-fluid h-75 w-75" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/pyNRqsV/MODERN.jpg" alt="slider4" className="img-fluid h-75 w-75" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/tzjLhJR/ECO-FLOORS.jpg" alt="slider5" className="img-fluid h-75 w-75" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/12WLd8T/creative-studio.jpg" alt="slider1" className="img-fluid h-75 w-75" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <img style={{height:'200px',width:'100px'}} src="https://i.ibb.co/RvT9GrY/roof.jpg" alt="slider2" className="img-fluid h-75 w-75" />
        </div>
      </Slider>
    </section>
  );
};

export default CarouselWorks;