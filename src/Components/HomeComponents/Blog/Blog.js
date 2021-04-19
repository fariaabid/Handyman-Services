import React from 'react';
import './Blog.css';
import blogThumb1 from '../../../images/blogThumb1.jpg';
import blogThumb2 from '../../../images/blogThumb2.jpg';
import blogThumb3 from '../../../images/blogThumb3.jpg';


const Blog = () => {
    return (
        <section className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-title text-center my-5">
                            <h2>Recent Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-blog-item shadow-lg p-3 mb-5 bg-white rounded">
                            <img className="mb-3" src={blogThumb1} alt=""/>
                            <h4>Sixteen tips for fix and repairs for starting problem</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti?...</p>
                            <a href="" className="boxed-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-blog-item shadow-lg p-3 mb-5 bg-white rounded">
                            <img className="mb-3" src={blogThumb2} alt=""/>
                            <h4>What Soap Should Use for Washing</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti?...</p>
                            <a href="" className="boxed-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-blog-item shadow-lg p-3 mb-5 bg-white rounded">
                            <img className="mb-3" src={blogThumb3} alt=""/>
                            <h4>Low Hanging Fruit Two A Identify A Ballpark</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti?...</p>
                            <a href="" className="boxed-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;