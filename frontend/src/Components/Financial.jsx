import React from 'react'
import financialimg1 from '../Assets/img/financial1.jpg'
import financialimg2 from '../Assets/img/finanical2.jpg'

function Financial() {
    return (
        <section>
            <div className="heros ">
                {/* <div className='container'>
                <div className='row  mt-5'>
                    <div className='col-md-6 pt-5 fin-section1'>
                        <div className='d-flex justify-content-center'>
                            <img src={financialimg1} alt="" className='img-fluid rounded-3' />
                        </div>
                    </div>
                    <div className='col-md-6 pt-5 d-flex justify-content-center align-items-center fin-section2 px-3'>
                        <div className=''>
                        <h4 className='heading4 text-white text-center'>Plan for your <span className='heading4'style={{color:"#900c3f"}}> Tommarrow ,</span> <br/> <span className='heading4 text-center' style={{color:"#900c3f"}}> Today</span></h4>

                            <h1 className='text-light pt-3 fs-5 heading3 '>Building a secure financial future requires a well-rounded approach. At Sarvamangala Financial
                                Services, we offer comprehensive financial planning services that encompass:</h1>
                            <p className='nature-primary1 pt-3 heading3 fs-5'>At Sarvamangala Financial Services, we believe that a secure financial future is a foundation upon which you can build your dreams.</p>
                            <ul>
                                <li className='text-white'>Investment Planning
                                    <p className='text-white mt-2 px-4'>Grow your wealth and achieve your long-term goals.</p>
                                </li>
                                <li className='text-white'>
                                    Retirement Planning
                                    <p className='text-white mt-2 px-4'>Retire comfortably with a personalized retirement plan.</p>
                                </li>
                                <li className='text-white'>
                                    Tax Planning
                                    <p className='text-white px-4'>
                                        Minimize your tax burden and maximize your returns.
                                    </p>
                                </li>
                                <li className='text-white mt-4'>
                                    Estimate Planing

                                    <p className='text-white mt-4 px-4'>.Secure your loved ones' financial future</p> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>

                <div className='container mt-5'>
                    <div className='row '>
                        <div className='col-md-6 fin-section1'>
                           <div className='mt-4'>
                           <div className=''>
                                <img src={financialimg1} alt="" className='img-fluid w-75 fin-img1 rounded-3' />
                            </div>
                            <div className='d-flex justify-content-end '>
                                <img src={financialimg1} alt="" className='img-fluid w-25 fin-img2' />
                            </div>
                           </div>
                        </div>
                        <div className='col-md-6 fin-section2'>
                            <div>
                                <div className=''>
                                <h4 className='heading4 text-white mt-4'>Plan for Tommorrow, <span className='heading4'style={{color:"#900c3f"}}> Today</span></h4>
                                    <p className='heading3 text-white mt-3 fs-6'>Building a secure financial future requires a well-rounded approach. At Sarvamangala Financial
                                        Services, we offer comprehensive financial planning services that encompass:</p>
                                    {/* <p className='text-light'>At Sarvamangala Financial Services, we believe that a secure financial future is a foundation upon which you can build your dreams.</p> */}
                                </div>

                                <div className=''>
                                    <ul className='fin-ul'>
                                        <li className=''> <span className='fs-5 heading3' style={{ color: '#900c3f' }}>👉🏻 Investment Planning</span>
                                            <p className='fin-li-p heading3 text-dark'>Grow your wealth and achieve your long-term goals.</p>
                                        </li>
                                        <li className=''> <span className='fs-5  heading3 ' style={{ color: '#900c3f' }}>👉🏻 Retirement Planning</span>
                                            <p className='fin-li-p heading3 text-dark'>Retire comfortably a personalized retirement plan.</p>
                                        </li>
                                        <li className=''> <span className='fs-5 heading3' style={{ color: '#900c3f' }}>👉🏻 Tax Planning</span>
                                            <p className='fin-li-p heading3 text-dark'> Minimize your tax burden & maximize your returns.</p>
                                        </li>
                                        <li className=''> <span className='fs-5 heading3' style={{ color: '#900c3f' }}>👉🏻 Estimate Planing</span>
                                            <p className='fin-li-p heading3 text-dark'>Secure your loved ones' financial future.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Financial