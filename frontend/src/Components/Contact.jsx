import React from 'react';
import img3 from '../Assets/img/img3.png'
export default function Contact() {
    return (
        <>
            <h4 className='heading4 text-white text-center mt-5'>Contact <span className='heading4' style={{ color: "#900c3f" }}> Us</span></h4>

            {/* <section className="page_breadcrumb">
                <div className="page_breadcrumb_shape_one float-bob-x">
                    <img src="https://html.tonatheme.com/2024/financer/assets/images/icons/shape_icon_13.png" alt="" />
                </div>
                <div className="page_breadcrumb_shape_two float-bob-y">
                    <img src="https://html.tonatheme.com/2024/financer/assets/images/icons/shape_icon_1.png" alt="" />
                </div>
               
            </section> */}

            <section className='my-5 contacting'>
                <div className="container image1">
                    <div className="row">
                        <div className="col-lg-4 col-xl-5">
                            {/* <img src="https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148317868.jpg?w=996&t=st=1712302963~exp=1712303563~hmac=8bf9f260cce7fcca238d84db1ab62b9a688255b05abfc2fc1f27cb1615c00717" alt="" className='img-fluid mt-5   ' /> */}
                            <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15551.53761857054!2d80.24327300000002!3d12.979244600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712314931884!5m2!1sen!2sin"
                                    width="100%" // Adjust width as needed
                                    height="450" // Adjust height as needed
                                    style={{ border: '0', borderRadius: '15px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps"
                                ></iframe>
                            </div>                      </div>
                        <div className="col-lg-8 col-xl-7">
                            <div class="">
                                <div class=" ">
                                    <div class="screen">
                                        <div class="screen-header">
                                            <div class="screen-header-left">
                                                <div class="screen-header-button close"></div>
                                                <div class="screen-header-button maximize"></div>
                                                <div class="screen-header-button minimize"></div>
                                            </div>
                                            <div class="screen-header-right">
                                                <div class="screen-header-ellipsis"></div>
                                                <div class="screen-header-ellipsis"></div>
                                                <div class="screen-header-ellipsis"></div>
                                            </div>
                                        </div>
                                        <div class="screen-body bg">
                                            <div class="screen-body-item left">
                                                <div class="app-title ">

                                                    <img src={img3} alt="" className='img-fluid' />
                                                </div>
                                                <div class="app-contact heading3">CONTACT INFO : +62 81 314 928 595</div>
                                            </div>
                                            <div class="screen-body-item">
                                                <div class="app-form">
                                                    <div class="app-form-group">
                                                        <input class="app-form-control heading5" placeholder="NAME" />
                                                    </div>
                                                    <div class="app-form-group">
                                                        <input class="app-form-control heading5" placeholder="EMAIL" />
                                                    </div>
                                                    <div class="app-form-group">
                                                        <input class="app-form-control heading5" placeholder="CONTACT NO" />
                                                    </div>
                                                    <div class="app-form-group message">
                                                        <input class="app-form-control heading5" placeholder="MESSAGE" />
                                                    </div>
                                                    <a href='#' class='primary-btn text-center'>
                                                        <span className='text-center heading3'>Submit</span>
                                                        <div class='liquid'></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <button type="submit">Submit</button> */}


                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
            <section class="contact_info_section pt_150 pb_120">
                <div class="container ">

                    <div class="row hovering-eff">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="contact_block_one mb_30 aos-init aos-animate " data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                <div class="contact_block_icon"><i class="bi bi-geo-alt"></i></div>
                                <div class="contact_block_title heading4"style={{color:"#c0093f"}}><h4>Our Location</h4></div>
                                <div class="contact_block_text heading3 fs-6"><p>Anna Nagar, <br />Chennai-600101</p></div>
                                
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="contact_block_one mb_30 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                                <div class="contact_block_icon"><i class="bi bi-envelope"></i></div>
                                <div class="contact_block_title heading4 " style={{color:"#c0093f"}}><h4>Email Address</h4></div>
                                <div class="contact_block_text heading3 "><p><a href="#" className='contact1'>  info@sarvamangalafinance.in</a> <br/><a href="#" className='contact1'>  info@sarvamangalafinance.in</a> </p></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="contact_block_one mb_30 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                <div class="contact_block_icon"><i class="bi bi-telephone"></i></div>
                                <div class="contact_block_title heading4"style={{color:"#c0093f"}}><h4>Phone Number</h4></div>
                                <div class="contact_block_text heading3"><p>Emergency Cases <br /><a href="#" className='contact1'>  04426155554</a></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}