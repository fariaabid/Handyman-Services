import React, { useEffect, useState } from 'react';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';
import loading from '../../../images/loading.gif'

const ClientsFeedback = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7000/feedback`)
            .then(res => res.json())
            .then(data => {
                setFeedbackData(data);
            })
    }, [])

    return (
        <section className="feedback-container  ">
            <div className="text-center">
                <h2>Clients <span className="text-brand">Feedback</span></h2>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <div className="row w-75">
                    {
                        feedbackData.length === 0 && <img src={loading} alt="loading" className="mx-auto"/>
                    }
                    {
                        feedbackData.map(feedback => <FeedbackDetail key={feedback._id} feedback={feedback}></FeedbackDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;