import React from "react";
import perumal from "../Assets/img/hero-banner/perumal.jpg";
// import perumal2 from "../Assets/img/hero-banner/tirupathi full 1.jpg"
// import perumal3 from "../Assets/img/hero-banner/tirupati.webp"
import logo from "../Assets/img/logo1.png";
import png from "../Assets/img/hero-banner/10578814.png";
import list from "../Assets/img/list.png";
import account from "../Assets/img/account.png";
import process from "../Assets/img/process.png";
import calendar from "../Assets/img/calendar.png";
import { Link } from "react-router-dom";

import Capital from "./Captial";
import Ournature from "./Ournature";
import Clarification from "./Clarification";
import Whychooseus from "./Whychoose";
import Contact from "./Contact";
import Financial from "./Financial";
import Footer from "./Footer";
import Testimonal from './Testimonal'
import MainCard from "./MainCard";
import Accordion from "./Accordion";

function Nav() {
  return (
    <>
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
                        href="home"
                      >
                        Home
                      </a>
                    </li>

                    <li class="nav-item">
                      <Link className="nav-link" to="goals">
                        Goals
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="chooseus">
                        ChooseUs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="services">
                         Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="plans">
                        Plans
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="contact">
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

      <div className="bg-form"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <section className=" overflow-x-hidden">
        {/* Hero */}
        <div className="hero">
          <div className="hero-opacity text-white">
            
          </div>
        </div>
      </section>
      {/* <section class="container-fluid mt-3">
  <div>
    <div class="row justify-content-center">
      <div class="col-md-4 mt-3">
        <div class="blue-card text-center animated-card">
          <p class="px-3 pt-4 fs-3 fw-semibold text-white">Private Finance & Business</p>
          <p class="px-5 fs-1 text-white">Service</p>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <div class="red-card text-center animated-card">
          <p class="px-3 pt-4 fs-3 fw-semibold text-white">Private Investment Data</p>
          <p class="px-5 fs-1 text-white">Analysis</p>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <div class="orange-card text-center animated-card">
          <p class="px-3 pt-4 fs-3 fw-semibold text-white">Customer Strategy &</p>
          <p class="px-5 fs-1 text-white">Marketing</p>
        </div>
      </div>
    </div>
  </div>
</section> */}

      <MainCard />
      <Ournature />
      <Capital />

      <Financial />
      {/* <Whychooseus /> */}
      <Clarification />
      <Testimonal />
      <Accordion />
      <Contact />
      <Footer />
    </>
  );
}

export default Nav;
