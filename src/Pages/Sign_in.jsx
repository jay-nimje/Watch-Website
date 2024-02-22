import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Sign_in() {

    const redirect = useNavigate();

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
    }

    const validation = () => {
        var result = true;
        if (formvalue.email == "" || formvalue.email == null) {
            toast.error('Plsese Enter the Email id', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            toast.error('Plsese Enter the Password', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res);

            if (res.data.length > 0) 
            {
                if (res.data[0].password == formvalue.password) 
                {

                    //session creat
                    localStorage.setItem('userid', res.data[0].id);
                    localStorage.setItem('user', res.data[0].fname);

                    toast.success('Login sucess !');
                    setFormvalue({ ...formvalue, email: "", password: "" });
                    return redirect('/');
                }
                else 
                {
                    toast.error(' Password not metched !', 
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    return false;
                }
            }
            else 
            {
                toast.error(' Email not found !', 
                    {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                return false;
            }

        }
    }

    return (
        <div>
            <main>
                {/* Hero Area Start*/}
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Sign In</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Area End*/}
                {/*================login_part Area =================*/}
                <section className="login_part section_padding ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_text text-center">
                                    <div className="login_part_text_iner">
                                        <h2>New to our Shop?</h2>
                                        <p>If you are not SignUp then Click the button</p>
                                        <Link to="/sign_up" className="btn_3">Create an Account</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_form">
                                    <div className="login_part_form_iner">
                                        <h3>Welcome Back ! <br />
                                            Please Sign in now</h3>
                                        <form className="row contact_form" action="" method="post">
                                            <div className="col-md-12 form-group p_star">
                                                <input type="email" className="form-control" id="email" name="email" onChange={onchangehandel} value={formvalue.email} placeholder="Email" />
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input type="password" className="form-control" id="password" onChange={onchangehandel} value={formvalue.password} name="password" placeholder="Password" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <div className="creat_account d-flex align-items-center">
                                                    <input type="checkbox" id="f-option" name="selector" />
                                                    <label htmlFor="f-option">Remember me</label>
                                                </div>
                                                <button type="submit" onClick={onsubmit} className="btn_3">
                                                    log in
                                                </button>
                                                <a className="lost_pass" href="#">forget password?</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================login_part end =================*/}
            </main>
        </div>
    )
}

export default Sign_in