import React, { useState, useEffect } from "react";
import profile1 from '../Assets/img/profile1.png';
import ournature1 from "../Assets/img/nature1.jpg";
import ournature2 from "../Assets/img/nature2.jpg";
import capital from "../Assets/img/why.png";
import listimg from '../Assets/img/list.png';
import account from "../Assets/img/account.png";
import process from "../Assets/img/process.png";
import calendar from "../Assets/img/calendar.png";
import { Link } from "react-router-dom";
import business from "../Assets/img/Business-loan-bg.png";
import Footer from "./Footer";
import financialimg1 from "../Assets/img/financial1.jpg";
import financialimg2 from "../Assets/img/finanical2.jpg";
import avatar1 from "../Assets/img/avatar1.avif";
import avatar2 from "../Assets/img/avatar2.avif";
import avatar3 from "../Assets/img/avatar3.avif";
import img1 from "../Assets/img/image1.png";
import img2 from "../Assets/img/image2.png";
import img3 from "../Assets/img/image3.png";
import img4 from "../Assets/img/image4.png";
import img5 from "../Assets/img/image5.png";
import img6 from "../Assets/img/image6.png";
import img7 from "../Assets/img/image7.png";
import img8 from '../Assets/img/image9.png'
import img9 from '../Assets/img/image8.png'
import logo from "../Assets/img/logo1.png";
import contact from "../Assets/img/conatct.png";
import fast from '../Assets/img/Fast.png'
import coins from "../Assets/img/coins.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import Scroll from './Scroll'
import planning from '../Assets/img/plan.png'
import {
  slice, concat,
} from 'lodash';
const LENGTH = 50;
const DATA = [...Array(LENGTH).keys()];
const IMAGE_SRC = ""
const LIMIT = 10;



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT))
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.post('api/count', {

        });
        console.log(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Turn off loading indicator in case of error
      }
    };

    fetchData(); // Call the fetchData function when component mounts

    const handleLoad = () => {
      setIsLoading(false); // Turn off loading indicator when window is fully loaded
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const [state, setState] = useState({})


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    CreateGoogleSheet()
    readGoogleSheet()
    setState({})

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((previousValues) => ({ ...previousValues, [name]: value }))

  }

  const [active, setActive] = useState(false)
  AOS.init({
    // Add your AOS options here
  });

  const [isZoomed, setIsZoomed] = useState(false);
  let gotoTop = (secID) => {
    const element = document.getElementById(secID);
    const navbarElement = document.querySelector('.navbar>.container-fluid');

    if (navbarElement) {
      var navHeight = navbarElement.clientHeight;
      // Use navHeight as needed
    }
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

    }

  }
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  gotoTop();
  const readGoogleSheet = () => {

    fetch('https://sheetdb.io/api/v1/61xmh86aqnksc')
      .then((response) => response.json())
      .then((data) => console.log(data));

  }
  const CreateGoogleSheet = () => {
    fetch('https://sheetdb.io/api/v1/61xmh86aqnksc', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ state })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (

    <div className="overflow-hidden">
      <div>
        {isLoading && (
          <div className="spinner-overlay">
            <div className="spinner" id="preloader"></div>
          </div>
        )}
        {/* Your other app content */}
      </div>
      <section className="nav-banner nav-bg ">
        <nav
          className="navbar navbar-expand-lg m-auto align-items-center d-flex justify-content-lg-center justify-content-between px-3 px-lg-0"
          id="home"
        >
          <div className="text-center px-lg-5">
            <img src={logo} className="logo px-3" alt="Logo" />
          </div>
          <button className="navbar-toggler shadow-none" onClick={() => setActive(!active)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className={`bi ${active ? "bi-x" : "bi-list"} text-white`}></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end shadow-none"
            id="navbarSupportedContent"
          >
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <div>
                  <ul class="navbar-nav heading3">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-white"
                        aria-current="page"
                        id="name-nav"
                        onClick={() => gotoTop('home1')}
                      >
                        Home
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" onClick={() => gotoTop('goals')} id="home-nav">
                        Goals
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" onClick={() => gotoTop('chooseus')} id="home-nav">
                        ChooseUs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" onClick={() => gotoTop('bussiness')} id="home-nav">
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" onClick={() => gotoTop('plans')} id="home-nav">
                        Plans
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blogs">
                        Blogs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" onClick={() => gotoTop('contact')} id="home-nav">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </section>

      {/* dotted animted effects */}
      <div className="bg-form"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      {/* hero bennar */}
      <section className=" overflow-x-hidden mt-5 mt-lg-0" data-aos="fade-down">
        {/* <div className="fall fall1">
          <img src={coins} alt={coins} />
        </div>
        <div className="fall fall2">
          <img src={coins} alt={coins} />
        </div> */}
        <div className="hero" id='home1'>
          <div className=" text-white"></div>
        </div>
      </section>
      {/* services card */}
      <div className="container-fluid my-3">
        <div className="row align-items-center justify-content-center gx-2 main-card g-3">
          <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="normal-card d-flex flex-column rounded-0">
              <p className="bg-no">01</p>
              <p className=" text-white heading3 fs-5">Big business loans, </p>
              <h1 className=" text-white heading4">bigger possibilities</h1>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1200">
            <div className="normal-card d-flex flex-column rounded-0">
              <p className="bg-no">02</p>
              <p className="text-white heading3 fs-5">We finance,</p>
              <h1 className=" heading4" style={{ color: "#900c3f" }}>
                India&#39;s future
              </h1>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-left" data-aos-duration="1000">
            <div className="normal-card d-flex flex-column rounded-0">
              <p className="bg-no">03</p>
              <p className="text-white heading3 fs-5">Competitive rates, </p>
              <h1 className="text-white heading4 ">flexible terms</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Our nature */}
      <section className="" id="goals">
        <div class="area position-relative">
          <div className="container">
            <div className="row py-5 paperrocket3">
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="">
                  <div className="">
                    <h4 className="heading4 text-white" data-aos="fade-right" data-aos-duration="1000">
                      Our{" "}
                      <span className="heading4" style={{ color: "#900c3f" }}>
                        {" "}
                        Goal
                      </span>
                    </h4>
                    <h1 className="pt-2 fs-4 text-light nature-1 heading3 mt-3" data-aos="fade-left" data-aos-duration="1300">
                      We Finance It. Secure Funding for Your Ambitions with
                      Sarvamangala.
                    </h1>
                    <h4
                      className="pt-4 nature-primary1 nature-1 heading1 fs-4 "
                      style={{ color: "#900c3f" }} data-aos="fade-right" data-aos-duration="1000"
                    >
                      Growth Never Stops.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="d-flex pt-2">
                    <div className="col-5">
                      <div className="nature-part" data-aos="zoom-out-up" data-aos-duration="700">
                        <img
                          src={ournature1}
                          alt=""
                          className="img-fluid rounded-2"
                        />
                      </div>
                    </div>
                    <div className="col-7">
                      <div data-aos="fade-left" data-aos-duration="700">
                        <div className="nature-part1">
                          <img
                            src={ournature2}
                            alt=""
                            className="img-fluid rounded-2"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>

      {/* choose us */}
      <div className="bg-green-1 text-white p-1" id='chooseus'>
        <div className="container">
          <div className="row align-items-center g-3 py-3 text-center ">
            <h4 className="heading4 text-white" data-aos="zoom-in" data-aos-duration="700">
              Why Choose{" "}
              <span className="heading4" style={{ color: "#900c3f" }}>
                {" "}
                Us?
              </span>
            </h4>

            <div className="col-md-4">
              <img src={capital} alt="" className="img-fluid fin-img1 rounded-3" />
            </div>
            <div className="col-md-8 text-dark">
              <div className="row gy-3">
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="mb-3" data-aos="zoom-out">
                    <div className="industries-card ">
                      <i
                        class="bi bi-ticket fs-2 m-2 "
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                      <p className="secondary-text mb-0  text-center heading2">
                        Big Ticket Loans
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div
                    className=" "
                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className="bi bi-lightning-fill fs-3 m-2"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                      <p className="secondary-text mb-1  text-center  heading2">
                        Competitive Rates
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div
                    className=""
                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className="bi bi-credit-card fs-3 m-2"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                      <p className="secondary-text mb-1 text-center  heading2">
                        Flexible Repayment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div

                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        class="bi bi-person-circle fs-4"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                      <p className="secondary-text mb-3 mt-2  text-center  heading2">
                        Expert Support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div

                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className="bi bi-joystick fs-3 m-2"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                      <p className="secondary-text mb-1  text-center heading2">
                        Fast Approvals
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div

                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className="bi bi-file-check-fill fs-3 m-2"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                      <p className="secondary-text mb-1  text-center heading2">
                        Collateral Options
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div

                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className="bi bi-cart-plus fs-3 m-2"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                      <p className="secondary-text mb-1 text-center heading2">
                        Business Focus
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div

                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className="bi bi-hand-thumbs-up fs-3 m-2"
                        style={{ color: "#c00937" }}
                      ></i>
                      {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                      <p className="secondary-text mb-1 text-center heading2">
                        Trust &amp; Security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bussinessLoan */}
      <section className="whatwedo overflow-hidden" id="bussiness">
        <div className="container overflow-hidden overflow-lg-visible">
          <div className="position-relative">
            <h4
              className="heading4 text-white text-center mb-3"
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              Business <span className="heading4 business-step">Loan</span>
            </h4>

            <div className="row align-items-center justify-content-center business-bg-step rounded-5 p-4">
              <div className="col-lg-4 mt-lg-5 left-sec mb-0">
                <div data-aos="fade-right" data-aos-duration="400">
                  <div
                    className="card border-0 business-card-step fw-semibold text-white mb-2 mb-lg-5"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={listimg}
                          className="bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 mb-0 business-step">
                         
                          Loans starting from ₹5 crores
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="800">
                  <div
                    className="card left-go business-card-step fw-semibold text-white mb-2 mb-lg-5"
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
                        <p className="card-title text-capitalize heading3 mb-0 business-step">
                          Fuel Your Business Growth Access the Capital You Need
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="900">
                  <div
                    className="card fw-semibold business-card-step text-white mb-2 mb-lg-5"
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
                          Loans upto ₹50 crores based on GST returns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-none d-lg-flex d-flex justify-content-center align-items-center">
                <div className="bgimage-holder">
                  <img
                    src={business}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    alt="steps"
                    className="w-100 h-100"
                  />
                </div>
              </div>

              <div className="col-lg-4 mt-lg-5 right-sec mt-0">
                <div data-aos="fade-left" data-aos-duration="600">
                  <div
                    className="card fw-semibold business-card-step text-white mb-2 mb-lg-5"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={process}
                          className="bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 business-step mb-2 mb-0">
                          Fast & seamless process
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="700">
                  <div
                    className="card right-go business-card-step fw-semibold text-white mb-2 mb-lg-5"
                    data-bs-toggle="offcanvas"
                  >
                    <div className="d-flex align-items-center">
                      <div className="card-icon p-3">
                        <img
                          src={fast}
                          className="bg-white"
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="card-body px-2 py-4 pe-3">
                        <p className="card-title text-capitalize heading3 business-step mb-0">
                          Fast & Easy Application: Get funded quickly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="800">
                  <div
                    className="card fw-semibold business-card-step text-white mb-2 mb-lg-5"
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
                        <p className="card-title text-capitalize heading3 business-step mb-0">
                          Tailored for Businesses: Solutions that fit your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-0 py-lg-5 heading3 btn1">
                <button>
                  <Link to={"business"}>More Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fianncial-planning */}
      <div className="heros " id='plans'>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>

        <div className="container mt-5">
          <div className="row ">
            <div className="col-lg-5 col-xl-6 fin-section1">
              <div className="">
                <div className="text-center text-md-center" data-aos="zoom-in-down" data-aos-duration="700">
                  <img
                    src={planning}
                    alt=""
                    className="img-fluid w-75 fin-img1 rounded-3"
                  />
                </div>

              </div>
            </div>
            <div className="col-lg-7 col-xl-6 fin-section2">
              <div>
                <div className="">
                  <h4 className="heading4 text-white mt-4" data-aos="zoom-in-down" data-aos-duration="1600">
                    Plan for Tommorrow,{" "}
                    <span className="heading4" style={{ color: "#900c3f" }}>
                      {" "}
                      Today
                    </span>
                  </h4>
                  <p className="heading3 text-white mt-3 fs-6" data-aos="zoom-out-left" data-aos-duration="700">
                    Building a secure financial future requires a well-rounded
                    approach. At Sarvamangala Financial Services, we offer
                    comprehensive financial planning services that encompass:
                  </p>
                  {/* <p className='text-light'>At Sarvamangala Financial Services, we believe that a secure financial future is a foundation upon which you can build your dreams.</p> */}
                </div>

                <div className="" data-aos="fade-left" data-aos-duration="1300">
                  <ul className="fin-ul">
                    <li className="">
                      {" "}
                      <span
                        className="fs-5 heading3"
                        style={{ color: "#900c3f" }}
                      >
                        👉🏻 Investment Planning
                      </span>
                      <p className="fin-li-p heading3 text-dark">
                        Grow your wealth and achieve your long-term goals.
                      </p>
                    </li>
                    <li className="">
                      {" "}
                      <span
                        className="fs-5  heading3 "
                        style={{ color: "#900c3f" }}
                      >
                        👉🏻 Retirement Planning
                      </span>
                      <p className="fin-li-p heading3 text-dark">
                        Retire comfortably a personalized retirement plan.
                      </p>
                    </li>
                    <li className="">
                      {" "}
                      <span
                        className="fs-5 heading3"
                        style={{ color: "#900c3f" }}
                      >
                        👉🏻 Tax Planning
                      </span>
                      <p className="fin-li-p heading3 text-dark">
                        {" "}
                        Minimize your tax burden & maximize your returns.
                      </p>
                    </li>
                    <li className="">
                      {" "}
                      <span
                        className="fs-5 heading3"
                        style={{ color: "#900c3f" }}
                      >
                        👉🏻 Estimate Planing
                      </span>
                      <p className="fin-li-p heading3 text-dark">
                        Secure your loved ones' financial future.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   {/* clarifications */}
      <section className="clarif mt-5 py-5" data-aos="zoom-in" data-aos-duration="1500">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-5">
              <h1 className="heading3 nature-1 fs-4">
                Schedule an appointment with a financial advisor today!
              </h1>
              <p className="py-3 heading3 nature-1 fs-5">
                We're here to help you achieve your financial dreams!
              </p>
            </div>
            <div className="col-md-4 py-lg-5 heading3 btn1">
              <button>
                <Link to={"tel:044-26155554"}>Give us a call</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 
      Our Blogs section */}
      {/* <section className="blogs">
        <div>
          <h4
            className="heading4 text-white text-center mb-3 mt-4"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            Our  <span className="heading4 business-step">Blogs</span>
          </h4>
          <div class="container blog-card mt-3">
            <div class="card-blog">
              <div class="card__header">
                <a href="/blogin">
                  <img
                    src="https://source.unsplash.com/600x400/?computer"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </a>
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Technology</span>
                <h4 className="heading3">What's new in 2022 Tech</h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
              <div class="card__footer">
                <div class="user">
                  <a href="/blogin">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="user__image"
                      class="user__image"
                    />
                  </a>
                  <div class="user__info">
                    <h5 className="heading3">Jane Doe</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
                <a href="/blogin">
                  <img
                    src="https://source.unsplash.com/600x400/?food"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </a>
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Food</span>
                <h4 className="heading3">Delicious Food</h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
              <div class="card__footer">
                <div class="user">
                  <a href="/blogin">
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      alt="user__image"
                      class="user__image"
                    />
                  </a>
                  <div class="user__info">
                    <h5 className="heading3">Jony Doe</h5>
                    <small>Yesterday</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
                <a href="/blogin">
                  <img
                    src="https://source.unsplash.com/600x400/?car,automobile"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </a>
              </div>
              <div class="card__body">
                <span class="tag tag-red">Automobile</span>
                <h4 className="heading3">Race to your heart </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
              <div class="card__footer">
                <div class="user">
                  <a href="/blogin">
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt="user__image"
                      class="user__image"
                    />
                  </a>
                  <div class="user__info">
                    <h5 className="heading3">John Doe</h5>
                    <small>2d ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="py-0 py-lg-5 heading3 btn1">
                <button>
                  <Link to={"blogs"}>More Details</Link>
                </button>
              </div>
      </section> */}
      {/* Testimonals */}
      <div >
        <div class="container testing text-center mt-4">
          <h4 className="heading4 text-white" data-aos="zoom-in" data-aos-duration="1100">
            Success{" "}
            <span className="heading4" style={{ color: "#900c3f" }}>
              {" "}
              Stories
            </span>
          </h4>
        </div>
        <div className="contaner-fluid mt-5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <div
            id="carouselExampleControls"
            class="carousel carousel-dark slide mb-5"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                    <div class="card ">
                      <div class="face front-face">
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Rajesh
                        </div>
                        <div class="designation heading3 fs-6 text-dark ">
                          Textile Factory Owner
                          <span className="heading3 text-center d-block">
                            (Coimbatore)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white">
                          <p>
                            &quot;Sarvamangala&#39;s loan helped us expand our
                            manufacturing unit. Now we can take on bigger orders
                            and create more jobs in our town. Great support!
                          </p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Priya
                        </div>
                        <div class="designation heading3  fs-6 text-dark">
                          Restaurant Owner
                          <span className="text-center d-block heading3">
                            {" "}
                            (Delhi)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white">
                          &quot;Never thought getting a loan for my restaurant
                          could be this easy. The team was very helpful
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
                        <div class="designation heading3  fs-6 text-dark">
                          Tech Startup Founders{" "}
                          <span className="text-center heading3 d-block">
                            (Bangalore)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white text-white">
                          <p>
                            {" "}
                            &quot;As a young entrepreneur, access to funds was a
                            big hurdle. Sarvamangala believed in our vision and
                            provided the loan that kickstarted our business.
                            Forever grateful!&quot;
                          </p>
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
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Mr. &amp; Mrs.Patel,
                        </div>
                        <div class="designation heading3 fs-6 text-dark ">
                          Dairy Farm Owners{" "}
                          <span className="text-center heading3 d-block">
                            (Gujarat)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white">
                          <p>
                            Interest rates were a big concern, but Sarvamangala
                            offered a very competitive deal. Now we can focus on
                            growing our business without the worry of high loan
                            repayments.
                          </p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Vikram
                        </div>
                        <div class="designation heading3  fs-6 text-dark">
                          Construction Company CEO{" "}
                          <span className="heading3 text-center d-block">
                            (Mumbai)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white">
                          Been with Sarvamangala for years now. They understand
                          the needs of our business and have always been there
                          to support us during our growth journey. Reliable
                          partner!
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
                        <div class="designation heading3  fs-6 text-dark">
                          Boutique Owner
                          <span className="heading3 d-block text-center">
                            (Hyderabad)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white text-white">
                          <p>
                            {" "}
                            Appreciated the clear communication and transparency
                            throughout the loan process. No hidden fees, which
                            is a big relief! Thanks, Sarvamangala.
                          </p>
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
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Sunil &amp; Sonali,
                        </div>
                        <div class="designation heading3 fs-6 text-dark ">
                          Travel Agency Owners{" "}
                          <span className="heading3 d-block text-center">
                            (kolkata)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white">
                          <p>
                            Taking a loan can be stressful, but
                            Sarvamangala&#39;s friendly and professional
                            approach made it a smooth experience. Highly
                            recommend!
                          </p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Ranjit,
                        </div>
                        <div class="designation heading3  fs-6 text-dark">
                          Printing Press Owner
                          <span className="heading3 d-block text-center">
                            (Chennai)
                          </span>
                        </div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-white">
                          Our business took a hit during the pandemic.
                          Sarvamangala helped us get back on track with a
                          flexible repayment plan. Thank you for being a
                          lifesaver!
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h4 className="nature-primary1 heading4 text-white text-center mt-4">
          <span style={{ color: "#900c3f" }}>FAQ</span>{" "}
        </h4>

        <div
          class="container overflow-hidden acc-bg  mt-4"
          id="placement-accordion"
        >
          <div class="accordion" id="accordionExample">
            <div class="row justify-content-center ">
              <div
                class="col-md-6"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header ">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img1}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        {" "}
                        What kind of loans does Sarvamangala offer?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        Sarvamangala specializes in providing business loans to
                        large enterprises. Our minimum loan amount is ₹5 crore.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img2}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        What factors do you consider a loan application?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3 ">
                        We assess a variety of factors, including your company's
                        financial health, credit history, business plan, and the
                        purpose of the loan.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img3}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        What types of collateral are acceptable for your loans?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        Depending on the loan details, we may accept various
                        forms of collateral, which could include real estate,
                        equipment, or inventory.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img4}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        What types of collateral are acceptable for your loans?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        Depending on the loan details, we may accept various
                        forms of collateral, which could include real estate,
                        equipment, or inventory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourth"
                      aria-expanded="false"
                      aria-controls="collapseFourth"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img5}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        What are the interest rates for your loans?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFourth"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        Interest rates are determined based on your
                        creditworthiness, loan amount, and loan term. We offer
                        competitive rates in the market.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img6}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        What is the typical loan approval timeframe?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        The approval process can vary depending on the
                        complexity of your loan request. We strive to provide a
                        decision as quickly as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <div class="pe-2 col-2 ">
                        <img
                          src={img7}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="head heading3 acco-head">
                        What documents do I need to submit my
                        application?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body ">
                      <p className="heading3">
                        The required documents will vary depending on your
                        specific situation. Generally, you can expect to provide
                        financial statements, business plans, tax returns, and
                        ownership information.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsenine"
                      aria-expanded="false"
                      aria-controls="collapsenine"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img8}
                          class="rounded-2"
                          width="40px"
                          hnine="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        What types of collateral are acceptable for your loans?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapsenine"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        Depending on the loan details, we may accept various
                        forms of collateral, which could include real estate,
                        equipment, or inventory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 mt-md-4"
                data-aos="fade-down"
                data-aos-duration="700"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <div class="pe-2 col-2">
                        <img
                          src={img9}
                          class="rounded-2"
                          width="40px"
                          height="40px"
                        />
                      </div>
                      <div className="heading3 acco-head">
                        Can I apply for a loan online?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="heading3">
                        Currently, we do not offer online loan applications.
                        However, you can contact us to discuss your needs and
                        initiate the application process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTS US */}
      <div id='contact'>
        <h4 className="heading4 text-white text-center mt-5" data-aos="zoom-in" data-aos-duration="1000">
          Contact{" "}
          <span className="heading4" style={{ color: "#900c3f" }}>
            {" "}
            Us
          </span>
        </h4>
        <section className="my-5 contacting">
          <div className="container image1">
            <div className="row">
              <div className="col-lg-4 col-xl-5" data-aos="fade-right" data-aos-duration="1000">
                {/* <img src="https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148317868.jpg?w=996&t=st=1712302963~exp=1712303563~hmac=8bf9f260cce7fcca238d84db1ab62b9a688255b05abfc2fc1f27cb1615c00717" alt="" className='img-fluid mt-5   ' /> */}
                <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15551.53761857054!2d80.24327300000002!3d12.979244600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712314931884!5m2!1sen!2sin"
                    width="100%" // Adjust width as needed
                    height="450" // Adjust height as needed
                    style={{ border: "0", borderRadius: "15px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>{" "}
              </div>
              <div className="col-lg-8 col-xl-7" data-aos="fade-left" data-aos-duration="700">
                <form onSubmit={handleSubmit}>
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
                              <img src={contact} alt="" className="img-fluid" />
                            </div>
                            <div class="app-contact heading3">
                              CONTACT INFO : +62 81 314 928 595
                            </div>
                          </div>
                          <div class="screen-body-item">
                            <div class="app-form">
                              <div class="app-form-group">
                                <input
                                  class="app-form-control heading5"
                                  placeholder="NAME" value={state.Name || ""}
                                  onChange={handleChange} name="Name"
                                />
                              </div>
                              <div class="app-form-group">
                                <input
                                  class="app-form-control heading5"
                                  placeholder="EMAIL" value={state.Email || ""}
                                  onChange={handleChange}
                                  name="Email"
                                />
                              </div>
                              <div class="app-form-group">
                                <input
                                  class="app-form-control heading5"
                                  placeholder="CONTACT NO" value={state.Phone || ""}
                                  onChange={handleChange}
                                  name="Phone"
                                />
                              </div>
                              <div class="app-form-group message">
                                <input
                                  class="app-form-control heading5"
                                  placeholder="MESSAGE" value={state.Message || ""}
                                  onChange={handleChange}
                                  name="Message"
                                />
                              </div>
                              <button type="submit" href="#" class="primary-btn text-center">
                                {/* <span> <button onClick={() => readGoogleSheet()}>
                                  create
                                </button>
                                  <button onClick={() => CreateGoogleSheet()}>
                                    read
                                  </button></span> */} <span className="text-white">Submit </span>
                                <div class="liquid"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <button type="submit">Submit</button> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="contact_info_section pt_150 pb_120" data-aos="zoom-in" data-aos-duration="700">
          <div class="container ">
            <div class="row hovering-eff">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div
                  class="contact_block_one mb_30 aos-init aos-animate "
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <div class="contact_block_icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div
                    class="contact_block_title heading4"
                    style={{ color: "#c0093f" }}
                  >
                    <h4>Our Location</h4>
                  </div>
                  <div class="contact_block_text heading3 fs-6">
                    <p>
                      Anna Nagar, <br />
                      Chennai-600101
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div
                  class="contact_block_one mb_30 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  <div class="contact_block_icon">
                    <i class="bi bi-envelope"></i>
                  </div>
                  <div
                    class="contact_block_title heading4 "
                    style={{ color: "#c0093f" }}
                  >
                    <h4>Email Address</h4>
                  </div>
                  <div class="contact_block_text heading3 ">
                    <p>
                      <a href="#" className="contact1">
                        {" "}
                        info@sarvamangalainvest.in
                      </a>{" "}
                      <br />
                      <a href="#" className="contact1">
                        {" "}
                        info@sarvamangalainvest.in
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div
                  class="contact_block_one mb_30 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <div class="contact_block_icon">
                    <i class="bi bi-telephone"></i>
                  </div>
                  <div
                    class="contact_block_title heading4"
                    style={{ color: "#c0093f" }}
                  >
                    <h4>Phone Number</h4>
                  </div>
                  <div class="contact_block_text heading3">
                    <p>
                      Emergency Cases <br />
                      <a href="#" className="contact1">
                        {" "}
                        044-26155554
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <Footer />
      <Scroll />
    </div>
  );
}
