import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {

    useEffect(() => {
        fetchdata();
    }, []);

    const [data, setdata] = useState({});

    const fetchdata = async () => {
        const id = localStorage.getItem('userid');
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setdata(res.data);
    }

    return (
        <div>
            <div className="watch-area p-3">
                <div className="container border border-3 ">
                    <h1 className='text-center mt-5 text-bold fa-4x'>Profile</h1>
                    <hr />
                    <div className="row align-items-center justify-content-between m-5">
                        <div className="col-lg-6 col-md-6 col-sm-10">
                            <div className="choice-watch-img mb-40">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="watch-details mb-30">
                                <h3>ID : {data.id}</h3>
                            </div>
                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">First Name :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.fname}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Last Name :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.lname}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.email}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Password :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.password}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Address :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.address}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Mobile :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.moblie}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <a href="javascript:void(0)" className="btn">Edit Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile