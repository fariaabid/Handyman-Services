import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import loading from '../../../images/loading.gif';

const HomeServices = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://ancient-cove-35788.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (
        <section className="services-container my-5 py-5">
            <div className="text-center">
                <h2>We Provide Awesome <span className="text-brand" style={{ color: "#1CC7C1" }}>Services</span></h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        serviceData.length === 0 && <img src={loading} alt="loading" className="mx-auto"/>
                    }
                    {
                        serviceData.map(service =>
                            <ServiceDetail
                                key={service._id}
                                service={service}
                            ></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeServices;