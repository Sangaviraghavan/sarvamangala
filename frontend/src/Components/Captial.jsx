import React from 'react'
import capital from '../Assets/img/capital.jpg'
import list from "../Assets/img/list.png";
import account from "../Assets/img/account.png";
import process from "../Assets/img/process.png";
import calendar from "../Assets/img/calendar.png";
import { Link } from 'react-router-dom';
import business from "../Assets/img/Business-loan-bg.png"



export default function Capital() {
  return (
    <div>
      <div className="bg-green-1 text-white p-1">
        <div className="container">
          <div className="row align-items-center g-3 py-3 text-center ">
            <h4 className='heading4 text-white'>Why Choose <span className='heading4' style={{ color: "#900c3f" }}> Us?</span></h4>

            <div className="col-md-4">
              <img src={capital} alt="" className='img-fluid' />

            </div>
            <div className="col-md-8 text-dark">
              <div className="row gy-3">
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card mb-3" data-aos='zoom-out'>
                    < i class="bi bi-ticket fs-2 m-2 " style={{ "color": "#c00937" }}></i>
                    {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-0  text-center heading2'>Big Ticket Loans</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card  pt-2" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-lightning-fill fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                    <p className='secondary-text mb-1  text-center  heading2'>Competitive Rates</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-credit-card fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                    <p className='secondary-text mb-1 text-center  heading2'>Flexible Repayment

                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i class="bi bi-person-circle fs-4" style={{ "color": "#c00937" }}></i>
                    {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                    <p className='secondary-text mb-3 mt-2  text-center  heading2'>Expert Support</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-joystick fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-1  text-center heading2'>Fast Approvals</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3"> 
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-file-check-fill fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1  text-center heading2'>Collateral Options</p>
                  </div>
                </div>
                <div    me="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cart-plus fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1 text-center heading2'>Business Focus</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-hand-thumbs-up fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1 text-center heading2'>Trust &amp; Security</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="">
        <div className="container business1-bg business2-bg">
        <div className=''>
        <h1 className='heading4 fs-4 mt-5 text-center'>Bussiness Loan</h1> 
          <div className="row justify-content-around  p-3">
      
            <div className="col-md-5 ">
              <div className="text-black-75 mt-5 pt-5">
               
                <h3 className='heading4 fs-5'>Take your business to great heights</h3>
                <p className="pt-4 heading3">
                  Presenting Business Loans by <span className='heading4 fs-6' style={{ color: "900c3f" }}>IDFC FIRST</span> Bank
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center pt-4">
                  <div className='col-md-4 py-2 heading3 btn1'>
                    <button>
                    <Link to={"contact"}>Conatct us</Link>
                    </button>
                  </div>
                  <div className='col-md-4 py-2 heading3 btn1'>
                   <button>
                   <Link to={"business"}>Deatil us</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="text-black-50 mt-5 p-3">
                <div className="mt-3 mt-md-4">
                  <div className="d-flex align-items-center shadow bg-opacity-25 rounded-4">
                    <div className="px-4">
                      <img
                        src={list}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className=" mt-2 heading3 text-dark">
                      Collateral-free funding up to ₹1 Cr for self-employed
                      individuals and businesses
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-4">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-4">
                      <img
                        src={account}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="heading3 mt-2 text-dark">
                      Quick funding up to ₹50 lacs based on your current account
                      statement
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-4">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-4">
                      <img
                        src={process}
                        className=""
                        alt=""

                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="heading3 mt-2 text-dark">
                      Loan up to ₹50 lacs based on your GST returns
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </section> */}
      <section className="whatwedo overflow-hidden " id="whatwedo">
        <div className="container overflow-hidden overflow-lg-visible">
          <div className="position-relative">
            <h4 className='heading4 text-white text-center mb-3' data-aos="fade-up"
              data-aos-duration="400">Business <span className='heading4 business-step' > Loan</span></h4>



            <div className="row align-items-center justify-content-center business-bg-step rounded-5 p-4">
              <div className="col-lg-4 mt-5 left-sec">
                <div data-aos="fade-right" data-aos-duration="400">
                  <div
                    className="card border-0 business-card-step fw-semibold  text-white  mb-5"
                    // to="#smokemodelling"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex  align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={list}
                          className="bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 mb-0 business-step" >
                          Loans up to ₹5 crore and beyond
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
                <div data-aos="fade-right" data-aos-duration="800">
                  <div
                    className="card left-go business-card-step fw-semibold  text-white mb-5"
                    // to="#firestategies"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={account}
                          className="bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 mb-0 business-step ">
                          Fuel Your Business Growth
                          Access the Capital You Need
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="900">
                  <div
                    className="card fw-semibold business-card-step text-white mb-5"
                    // to="#smokemodelling"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={calendar}
                          className="bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 business-step mb-0">
                          Loan up to ₹50 lacs based on your GST returns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 d-none d-lg-flex d-flex justify-content-center align-items-center"
              >
                <div className="bgimage-holder">
                  <img
                    src={business}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    alt="steps"
                    className="w-100  h-100"
                  />
                </div>
              </div>

              <div className="col-lg-4 mt-5 right-sec">
                <div data-aos="fade-left" data-aos-duration="600">
                  <div
                    className="card  fw-semibold business-card-step  text-white  mb-5"
                    // to="#strecturalfire"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={process}
                          className=" bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 business-step mb-0">
                          Fast & seamless process
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="700">
                  <div
                    className="card right-go business-card-step  fw-semibold  text-white  mb-5"
                    // to="#firesuppression"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={list}
                          className=" bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 business-step mb-0">
                          Collateral-free funding up to ₹1 Cr for self-employed
                          individuals and businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="00">
                  <div
                    className="card  fw-semibold business-card-step  text-white  mb-5"
                    // to="#sprinklersystem"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={list}
                          className=" bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 business-step mb-0">
                          Collateral-free funding up to ₹1 Cr for self-employed
                          individuals and businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' py-5 heading3 btn1'>
                <button >
                  <Link to={"business"}>More Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>

  )
}
