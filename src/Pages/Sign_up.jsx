import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function Sign_up() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        address: "",
        moblie: ""
    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const validation = () => {
        var result = true;
        if (formvalue.fname == "" || formvalue.fname == null) {
            toast.error('Please Enter the first name!', {
                position: toast.POSITION.BOTTOM_RIGHT,
           }); 
            return false;
        }
        if (formvalue.lname == "" || formvalue.lname == null) {
            toast.error('Please Enter the Last Name !',{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.email == "" || formvalue.email == "null") {
            toast.error('Please Enter the Email id !',{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.password == "" || formvalue.password == "null") {
           toast.error('Please Enter the Password',{
            position: toast.POSITION.BOTTOM_RIGHT,
           });
            return false;
        }
        if (formvalue.address == "" || formvalue.address == "null") {
            toast.error('Please Enter the Address',{
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return false;
        }
        if (formvalue.moblie == "" || formvalue.moblie == "null") {
           
            toast.error('Please Enter the Mobile number',{
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return false;
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/user`, formvalue);
            // console.log(res);
            if (res.status == 201) {
                setFormvalue({ ...formvalue, fname: "", lname: "", email: "", password: "", address: "", moblie: "" });
                toast.success('Register Sucessfully',{
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                return false;
            }
        }
    }

    return (
        <div>
            <main>
                {/*? Hero Area Start*/}
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Sign Up</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*? Hero Area End*/}
                {/* ================ contact section start ================= */}
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Register</h2>
                            </div>
                            <div className="col-lg-12">
                                <form className="form-contact contact_form" action="" method="post">
                                    <div className="row">
                                        <div className="col-12">
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="fname" type="text" onChange={onchangehandel} value={formvalue.fname} placeholder="Enter your first name" />
                                                <div class="mt-3">
                                                    <h6 id="fname_msg"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="lname" id="email" type="text" onChange={onchangehandel} value={formvalue.lname} placeholder="Enter your last name" />
                                                <div class="mt-3">
                                                    <h6 id="lname_msg"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="email" id="subject" type="email" onChange={onchangehandel} value={formvalue.email} placeholder="Enter your Email i'd" />
                                                <div class="mt-3">
                                                    <h6 id="email_msg"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="password" id="subject" type="password" onChange={onchangehandel} value={formvalue.password} placeholder="Enter your Password" />
                                                <div class="mt-3">
                                                    <h6 id="password_msg"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="address" id="subject" type="text" onChange={onchangehandel} value={formvalue.address} placeholder="Enter your Address" />
                                                <div class="mt-3">
                                                    <h6 id="address_msg"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="moblie" id="subject" type="tel" onChange={onchangehandel} value={formvalue.moblie} placeholder="Enter your moblie" />
                                                <div class="mt-3">
                                                    <h6 id="mobile_msg"></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" onClick={onsubmit} className="button button-contactForm boxed-btn">Sign Up</button>
                                    </div>
                                </form>
                                <div>
                                    <Link className='text-danger' to="/sign_in">If you are already SignUp then Click Here to Sign in...</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ================ contact section end ================= */}
            </main>
        </div>
    )
}

export default Sign_up