import React from 'react'
import logo from '../Assets/img/logo1.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Footer() {
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await axios.get("api/get");
                setSocialLinks(response.data.data[0].count);
            } catch (error) {
                console.error("Error fetching social links:", error);
            }
        };

        fetchSocialLinks();
    }, []);

    return (

        <footer className="footer-section mt-4">
            <div className="container">
                <div className="footer-cta pt-5 ">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30"></div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 ">
                            <div className="footer-widget">
                                <div className="footer-logo nature-1">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                </div>
                                {/* <div className="footer-text">
                                    <p className='heading3'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div> */}
                                <div className="footer-social-icon nature-1">
                                    <span className='heading5 text-white'>Follow us </span>
                                    <div class="social-icons">

                                        <div class="social-buttons">
                                            {/* <a href="https://web.whatsapp.com/" target="blank" class="social-margin">
                                                <div class="social-icon whatsapp">
                                                    <i class="bi bi-whatsapp" aria-hidden="true"></i>
                                                </div>
                                            </a> */}
                                            <a href="https://www.facebook.com/profile.php?id=61553902680645" target="blank" class="social-margin">
                                                <div class="social-icon facebook">
                                                    <i class="bi bi-facebook"></i>
                                                </div>
                                            </a>
                                            <a href="https://www.instagram.com/sarvamangalafinancialservices/" target="blank" class="social-margin">
                                                <div class="social-icon instagram">
                                                    <i class="bi bi-instagram"></i>
                                                </div>
                                            </a>

                                            {/* <a href="http://twitter.com/" target="blank" class="social-margin">
                                                <div class="social-icon twitter">
                                                    <i class="bi bi-twitter"></i>
                                                </div>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 ">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='heading3'>Useful Links</h3>
                                </div>
                                <ul className='heading3'>
                                    <li><a href="#" >Home</a></li>
                                    <li><a href="#goals">Goals</a></li>
                                    <li><a href="#bussiness">services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#plans">Plans</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='heading5'>Subscribe</h3>
                                </div>
                                <div className="footer-text">
                                    <p className='heading3'>Get exclusive insights & offers. Follow us on Instagram & Facebook! {socialLinks}
                                    </p>
                                </div>
                                {/* <div className='heading3 btn2 text-center mt-3'>
                                    <button className='' >
                                        <Link to={"contact"}>Contact Us</Link>
                                    </button>
                                </div> */}

                            </div>
                        </div>
                        <hr className='mt-2' />
                        <p className='text-center text-white text-capitalize'>Copyright © All rights reserved 2024.sarvamangalafinance <Link to={"/privacy"} className='text-primary text-text-decoration-underline'>privacy policy</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer