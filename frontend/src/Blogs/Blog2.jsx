import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/logo1.png";
import Footer from "../Components/Footer";
import Scroll from '../Components/Scroll'
import axios from 'axios'
import {
  slice, concat,
} from 'lodash';
const LENGTH = 50;
const DATA = [...Array(LENGTH).keys()];
const IMAGE_SRC = "https://source.unsplash.com/600x400/?car,automobile"
const LIMIT = 6;

function Blog2() {

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  // Function to load more items
  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }
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
    <div>
      <section className="nav-banner nav-bg ">
        <nav
          className="navbar navbar-expand-lg m-auto align-items-center d-flex justify-content-center  "
          id="home"
        >
          <div className="text-center px-5">
            <img src={logo} className="logo px-3" alt="Logo" />
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav heading3">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-white"
                        aria-current="page"
                        id="name-nav"
                        href="/"
                      >
                        Home
                      </a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="/" id="goals">
                        Goals
                        </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/" id="chooseus">
                        ChooseUs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/" id="services">
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/" id="plans">
                        Plans
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blogs">
                        Blogs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/" id="contact">
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
      <section className=" overflow-x-hidden mt-5 mt-lg-0" data-aos="fade-down">
        <div className="hero" id="home1">
        </div>
      </section>
      <div>
        <h4
          className="heading4 text-dark text-center mb-3 mt-4"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          Our  <span className="heading4 business-step">Blogs</span>
        </h4>
      </div>
      <section className="bg-body-secondary p-5">
        <div className="container">
          <div className="blog-card">
            {list.map((item, index) => (
              <div className="card-blog" key={index}>
                <div className="card__header">
                  <Link to={"/blogin"}>
                    <img
                      src={IMAGE_SRC}
                      alt="card__image"
                      className="card__image"
                      width="600"
                    />
                  </Link>
                </div>
                <div className="card__body">
                  <span className="tag tag-blue">Business Loan</span>
                  <h4 className="heading3">
                    Sample Blog Title
                  </h4>
                  <p className="heading3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    perferendis molestiae non nemo doloribus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Load more button */}
        <div className="py-0 py-lg-5 heading3 btn1">
         
            {showMore && <button onClick={loadMore}> Load More </button>}
        
        </div>

      </section>
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
                                    <li><a href="/" >Home</a></li>
                                    <li><a href="/">Goals</a></li>
                                    <li><a href="/">services</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Plans</a></li>

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
                    </div>
                </div>
                <hr className='mt-2' />
                <p className='text-center text-white text-capitalize pb-2'>Copyright © All rights reserved 2024.sarvamangalafinance <Link to={"/privacy"} className='text-primary text-text-decoration-underline'>privacy policy</Link></p>
            </div>
        </footer>
      <Scroll />
    </div>
  );
}

export default Blog2;
