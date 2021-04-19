import React from 'react';

const WhyChooseUsDetails = ({data}) => {
    return (
        <div className="col-md-4 text-center">
        <img style={{height:'150px'}} src={data.image} alt=""/>
        <h5 className="my-3">{data.name}</h5>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis deleniti eveniet eaque repellendus dolores aliquam! Culpa hic, tempore minus sed quasi error illo saepe ullam, nam est incidunt provident.</p>
    </div>
    );
};

export default WhyChooseUsDetails;