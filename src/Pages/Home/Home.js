import React from 'react';
import Blog from '../../Components/HomeComponents/Blog/Blog';
import ClientsFeedback from '../../Components/HomeComponents/ClientsFeedback/ClientsFeedback';
import Footer from '../../Components/HomeComponents/Footer/Footer';
import HeaderMain from '../../Components/HomeComponents/HeaderMain/HeaderMain';
import HomeClient from '../../Components/HomeComponents/HomeClient/HomeClient';
import HomeServices from '../../Components/HomeComponents/HomeServices/HomeServices';
import WhyChooseUs from '../../Components/HomeComponents/WhyChooseUs/WhyChooseUs';
import CarouselWorks from './../../Components/HomeComponents/CarouselWorks/CarouselWorks';

const Home = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <HeaderMain/>
            <WhyChooseUs></WhyChooseUs>
            <HomeServices></HomeServices>
            <CarouselWorks></CarouselWorks>
            <HomeClient></HomeClient>
            <ClientsFeedback></ClientsFeedback>
            <Blog></Blog>
            <Footer/>
        </div>
    );
};

export default Home;