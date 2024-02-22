import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {

    const redirect = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userid');
        toast.success('Logout success');
        return redirect('/');
    }
    return (
        <div>
            {/*? Preloader Start */}
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/logo.png" alt />
                        </div>
                    </div>
                </div>
            </div>
            {/* Preloader Start */}
            <header>
                {/* Header Start */}
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper">
                                {/* Logo */}
                                <div className="logo">
                                    <a href="/"><img src="assets/img/logo/logo.png" alt /></a>
                                </div>
                                {/* Main-menu */}
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/mens">Men's</NavLink></li>
                                            <li><NavLink to="/womans">Woman's</NavLink></li>
                                            <li><NavLink to="/kids">Kid's</NavLink></li>
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/blog">Blog</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Header Right */}
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <div className="nav-search search-switch">
                                                <span className="flaticon-search" />
                                            </div>
                                        </li>
                                        <li>
                                            {(() => {

                                                if (localStorage.getItem('user')) {
                                                    return (
                                                        <>
                                                            <span className="flaticon-user">
                                                                <NavLink to="/profile" style={{color:"black"}}> {localStorage.getItem('user')}</NavLink>
                                                            </span>
                                                            <NavLink to="javascript:void(0)" onClick={logout}>
                                                                <span>
                                                                    Logout
                                                                </span>
                                                            </NavLink>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <li>
                                                            <NavLink to="/sign_in"><span className="flaticon-user"> Sign In</span></NavLink>
                                                            <NavLink to="/sign_up"><span className="flaticon-user"> Sign Up</span></NavLink>
                                                        </li>
                                                    )
                                                }
                                            })()}
                                        </li>
                                        <li><NavLink to="/cart"><span className="flaticon-shopping-cart" /></NavLink> </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        </div>

    )
}

export default Header