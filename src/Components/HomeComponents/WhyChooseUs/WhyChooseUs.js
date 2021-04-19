import React from "react";
import WhyChooseUsDetails from '../../../Components/HomeComponents/WhyChooseUsDetails/WhyChooseUsDetails';
import './WhyChooseUs.css';
import trustworthy from '../../../images/trustworthy.jpg';
import locallyOwned from '../../../images/locallyOwned.jpg';
import experienced from '../../../images/experienced.jpg';
const whyChooseUsData =[
    {
        name:'TRUSTWORTHY',
        image:trustworthy
    },
    {
        name:'LOCALLY-OWNED',
        image:locallyOwned
    },
    {
        name:'EXPERIENCED',
        image:experienced
    }
]

const WhyChooseUs = () => {
  return (
    <section className="pt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>Welcome</h5>
        <h2>Why Choose Us?</h2>
      </div>
      <div class="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-1">
          {whyChooseUsData.map((data) => (
            <WhyChooseUsDetails data={data}></WhyChooseUsDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
