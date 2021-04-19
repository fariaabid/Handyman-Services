import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './Order.css'
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSuitcaseRolling, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        fetch('https://ancient-cove-35788.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Added successfully!");
                history.push("/customerServiceList");
                console.log(data);
                console.log('posted');
            })
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img  style={{width:'50px',height:'50px'}} src={logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Order</h4>
                        <div className="profile">
                            <h4>
                                <img style={{ height: '30px', width: '30px',marginRight:'10px' }} src={loggedInUser.photoURL} alt="photoURL" />
                                {loggedInUser.displayName}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-3">
                        <div className="sidebar d-flex flex-column">
                            <Link to="/customerOrder" className="py-1">
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Order</h6>
                            </Link>
                            <Link to="/customerServiceList" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> Services</h6>
                            </Link>
                            <Link to="/customerReview" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faCommentAlt} className="mr-2" /> Review</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input defaultValue={loggedInUser.displayName} name="name" type="text" placeholder="Name" className="form-control" ref={register({ required: true })} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input defaultValue={loggedInUser.email} type="text" name="email" placeholder="Email" className="form-control" ref={register({ required: true })} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="serviceName" placeholder="Enter service order name" className="form-control" ref={register({ required: true })} />
                                {errors.serviceName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea name="projectDetails" placeholder="Project Details" className="form-control" ref={register({ required: true })} rows="3"></textarea>
                                {errors.projectDetails && <span className="text-danger">This field is required</span>}
                            </div>
                            <p>Pay With:</p>
                                <div className="d-flex mb-4">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input {...register("payWith")} type="radio" id="customRadioInline1" className="custom-control-input" checked/>
                                        <label className="custom-control-label" for="customRadioInline1">Credit Card</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input {...register("date")} className="form-control" type="date" placeholder="MM/YY"/>
                                        </div>  
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input {...register("CVC")} className="form-control" type="text" placeholder="CVC"/>
                                        </div>  
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="m-0">Your service charge will be: <span style={{color: '#ee0d09'}}>$50</span></h5>
                                </div>
                                <div className="form-group">
                                <button type="submit" className="btn btn-dark my-5">Send</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;