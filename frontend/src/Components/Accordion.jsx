import React from 'react'
import  img1 from '../Assets/img/image1.png'
import  img2 from '../Assets/img/image2.png'
import  img3 from '../Assets/img/image3.png'
import  img4 from '../Assets/img/image4.png'
import  img5 from '../Assets/img/image5.png'
import  img6 from '../Assets/img/image6.png'
import  img7 from '../Assets/img/image7.png'


export default function Accordion() {
  return (
    <div>
    <h4 className='nature-primary1 heading4 text-white text-center mt-4'><span  style={{color:"#900c3f"}}>FAQ</span> </h4>

        <div class="container overflow-hidden acc-bg  mt-4" id="placement-accordion">
      <div class="accordion" id="accordionExample">
        <div class="row justify-content-center ">
          <div class="col-md-6" data-aos="fade-left" data-aos-duration="600">
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
                  <div className='heading3 text-white'> What kind of loans does Sarvamangala offer?</div>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p className='heading3' >
                  Sarvamangala specializes in providing business loans to large enterprises. Our minimum loan amount is ₹5 crore.
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
                  <div  className='heading3  text-white'>What factors do you consider a loan application?</div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p className='heading3 '>
                  We assess a variety of factors, including your company's financial health, credit history, business plan, and the purpose of the loan.
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
                  <div className='heading3 text-white'>What types of collateral are acceptable for your loans?</div>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p className='heading3'>
                  Depending on the loan details, we may accept various forms of collateral, which could include real estate, equipment, or inventory.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-right" data-aos-duration="600">
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
                      src={img4}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div  className='heading3  text-white'>What are the interest rates for your loans?</div>
                </button>
              </h2>
              <div
                id="collapseFourth"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p  className='heading3'>
                  Interest rates are determined based on your creditworthiness, loan amount, and loan term. We offer competitive rates in the market.
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
                      src={img5}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className='heading3 text-white'>What is the typical loan approval timeframe?</div>
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p className='heading3'>
                  The approval process can vary depending on the complexity of your loan request. We strive to provide a decision as quickly as possible.
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
                      src={img6}
                      class="rounded-2" 
                      width="40px"  
                      height="40px"
                    />
                  </div>
                  <div  className='head heading3 text-white'>What documents do I need to submit with my loan application?</div>
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"  
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body ">
                  <p  className='heading3'>
                  The required documents will vary depending on your specific situation. Generally, you can expect to provide financial statements, business plans, tax returns, and ownership information.
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
                      src={img7}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className='heading3 text-white'>Can I apply for a loan online?</div>
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p className='heading3'>
                  Currently, we do not offer online loan applications. However, you can contact us to discuss your needs and initiate the application process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
