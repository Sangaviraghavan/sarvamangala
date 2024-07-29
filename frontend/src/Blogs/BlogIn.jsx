import React from 'react'
import { Link } from 'react-router-dom'

function BlogIn() {
  return (
    <>
      <div className="business-bg  d-flex justify-content-center align-items-center">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner container">
            <div class="carousel-item active">
              {/* <img src={carousel} alt="" /> */}
              <h1 className='business_banner_text heading4'>Our Blogs</h1>
              {/* <p className='business_banner_text2 mb-3'>Loan Upto</p> */}
              <div className=' py-5 heading3 btn1'>
                <button >
                  <Link to={"/"}>Back To Home</Link>
                </button>
              </div>
              <p className='business_banner_text2 heading6' style={{ color: "#900c3f" }}>10 Crore and Above</p>
            </div>
            <div class="carousel-item">
              {/* <img src={carousel1} alt="" /> */}
              <h1 className='business_banner_text heading4 '>Money In Your Bank In</h1>
              <div className=' py-5 heading3 btn1'>
                <button >
                  <Link to={"/"}>Back To Home</Link>
                </button>
              </div>
              <p className='business_banner_text2 heading6' style={{ color: "#900c3f" }}>48 Hours</p>
            </div>
            <div class="carousel-item">
              {/* <img src={carousel2} alt="" /> */}
              <h1 className='business_banner_text heading4'>Interest Rate As Low as</h1>
              <div className=' py-5 heading3 btn1'>
                <button >
                  <Link to={"/"}>Back To Home</Link>
                </button>
              </div>
              <p className='business_banner_text2 heading6' style={{ color: "#900c3f" }}>1 Percent</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='business_para mt-4'>
          <h2 className='text-center fs-2 heading4 ' style={{ color: "#900c3f" }} >Blogs</h2>
          <p className='heading3 fs-6 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, autem! Eaque animi minus accusamus distinctio illum, magni fugiat ipsum unde.</p>
        </div>


      </div> <div className='background-container_1 mt-5'></div></>

  )
}

export default BlogIn