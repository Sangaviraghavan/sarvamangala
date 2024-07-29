import React from 'react'
import profile1 from '../Assets/img/profile1.png';
export default function Testimonal() {
    return (
        <div>
            <div class="container testing text-center mt-4">
                <h4 className='heading4 text-white'>Success <span className='heading4' style={{ color: "#900c3f" }}> Stories</span></h4>


            </div>
            <div className="contaner-fluid mt-5">
                <div id="carouselExampleControls" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                                    <div class="card ">
                                        <div class="face front-face">
                                            <img src={profile1}
                                                alt="" className="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Rajesh
                                            </div>
                                                 <div class="designation heading3 fs-6 text-dark ">Textile Factory Owner<span className='heading3 text-center d-block'>(Coimbatore)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                <p>&quot;Sarvamangala&#39;s loan helped us expand our manufacturing unit. Now we can take on bigger
                                                    orders and create more jobs in our town. Great support!</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={profile1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Priya
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Restaurant Owner<span className='text-center d-block heading3'> (Delhi)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                &quot;Never thought getting a loan for my restaurant could be this easy. The team was very helpful
                                                throughout the process. Thanks, Sarvamangala!
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-  d-none d-lg-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={profile1} alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Akash &amp; Meena
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Tech Startup Founders <span className='text-center heading3 d-block'>(Bangalore)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white text-white">
                                                <p> &quot;As a young entrepreneur, access to funds was a big hurdle. Sarvamangala believed in our
                                                    vision and provided the loan that kickstarted our business. Forever grateful!&quot;</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                                    <div class="card ">
                                        <div class="face front-face">
                                            <img src={profile1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Mr. &amp; Mrs.Patel,

                                            </div>
                                            <div class="designation heading3 fs-6 text-dark ">Dairy Farm Owners <span className='text-center heading3 d-block'>(Gujarat)</span></div>
                                        </div>
                                        <div class="face back-face">                    
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                <p>Interest rates were a big concern, but Sarvamangala offered a very competitive deal. Now we
                                                    can focus on growing our business without the worry of high loan repayments.</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={profile1}
                                                alt="" class="profile" />
                                             <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Vikram
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Construction Company CEO <span className='heading3 text-center d-block'>(Mumbai)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                Been with Sarvamangala for years now. They understand the needs of our business and have
                                                always been there to support us during our growth journey. Reliable partner!
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-lg-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={profile1} alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Kavitha
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Boutique Owner<span className='heading3 d-block text-center'>(Hyderabad)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white text-white">
                                                <p> Appreciated the clear communication and transparency throughout the loan process. No
                                                    hidden fees, which is a big relief! Thanks, Sarvamangala.</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                                    <div class="card ">
                                        <div class="face front-face">
                                            <img src={profile1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Sunil &amp; Sonali,
                                            </div>
                                            <div class="designation heading3 fs-6 text-dark ">Travel Agency Owners <span className='heading3 d-block text-center'>(kolkata)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                <p>Taking a loan can be stressful, but Sarvamangala&#39;s friendly and professional approach made it
                                                    a smooth experience. Highly recommend!</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={profile1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Ranjit,
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Printing Press Owner
                                                <span className='heading3 d-block text-center'>(Chennai)</span></div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                Our business took a hit during the pandemic. Sarvamangala helped us get back on track with a
                                                flexible repayment plan. Thank you for being a lifesaver!
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
