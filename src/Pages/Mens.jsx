import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Mens() {

    // const redirect = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([]);

    const fetchData = async (e) => {
        const { data } = await axios.get(`http://localhost:3000/product/?cat_name=${"Men"}`)
        setData(data);
    };


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
                                        <h2>Men's wathes</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Area End*/}
                {/* Latest Products Start */}
                <section className="popular-items latest-padding">
                    <div className="container">
                        <div className="row product-btn justify-content-between mb-40">
                            <div className="properties__button">
                                {/*Nav Button  */}
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">NewestArrivals</a>
                                    </div>
                                </nav>
                                {/*End Nav Button  */}
                            </div>
                            {/* Grid and List view */}
                            {/* Select items */}
                        </div>
                        {/* Nav Card */}
                        {/* card one */}

                        {
                            data.map((value, index) => (

                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <div className="single-popular-items mb-50 text-center">
                                                    <div className="popular-img">
                                                        <img src={value.img_link} alt="" />
                                                        <div className="img-cap">
                                                            <span>Add to cart</span>
                                                        </div>
                                                        <div className="favorit-items">
                                                            <span className="flaticon-heart" />
                                                        </div>
                                                    </div>
                                                    <div className="popular-caption">
                                                        <h3>{value.pro_brand}</h3>
                                                        <span>{value.pro_type}</span>
                                                        <span>{value.cat_name}</span>
                                                        <span>{value.pro_des}</span>
                                                        <span>Rs {value.pro_price}</span>
                                                        <span>Dis {value.pro_dis_price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }
                        {/* End Nav Card */}
                    </div>
                </section>
                {/* Latest Products End */}
                {/*? Shop Method Start*/}
                <div className="shop-method-area">
                    <div className="container">
                        <div className="method-wrapper">
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="single-method mb-40">
                                        <i className="ti-package" />
                                        <h6>Free Shipping Method</h6>
                                        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="single-method mb-40">
                                        <i className="ti-unlock" />
                                        <h6>Secure Payment System</h6>
                                        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="single-method mb-40">
                                        <i className="ti-reload" />
                                        <h6>Secure Payment System</h6>
                                        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Shop Method End*/}
            </main>

        </div>
    )
}

export default Mens