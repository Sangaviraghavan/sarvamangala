import React from 'react'


import Footer from './Footer'
import { Link } from 'react-router-dom'
// import Nav from '../Components/Nav'
// import carousel from "../Assets/img/carousel_img_2.svg"
// import carousel1 from "../Assets/img/carousel_img_3.svg"
// import carousel2 from "../Assets/img/carousel_img_4.svg"
import sbi1 from "../Assets/img/sbi1.png"
function Businessloan() {
    return (

        <div>

            <div className="business-bg  d-flex justify-content-center align-items-center">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner container">
                        <div class="carousel-item active">
                            {/* <img src={carousel} alt="" /> */}
                            <h1 className='business_banner_text heading4'>Business Loan Upto</h1>
                            {/* <p className='business_banner_text2 mb-3'>Loan Upto</p> */}
                            <div className=' py-5 heading3 btn1'>
                                <button >
                                    <Link to={"/"}>Back To Home</Link>
                                </button>
                            </div>
                            <p className='business_banner_text2 heading6' style={{ color: "#900c3f" }}>10 Crore & Above</p>
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

            <section className='business mt-2'>
                <div className='container'>
                    <div className='business_para mt-4'>
                        <h2 className='text-center fs-2 heading4 ' style={{ color: "#900c3f" }} >WHAT IS A BUSINESS LOAN?</h2>
                        <p className='heading3 fs-6 mt-4'>A business loan is a financial helping hand offered by lenders like banks or financial institutions specifically to businesses. It provides companies with the capital they need to fund various goals, such as starting a business, expanding operations, purchasing equipment, or managing everyday expense.These loans typically come with a fixed interest rate and a repayment schedule that the business needs to follow.</p>
                    </div>


                </div> <div className='background-container_1 mt-5'>
                    <div className='container'>
                        <h3 className='bus_texts heading4 text-center' style={{ color: "#900c3f" }}>BUSINESS LOAN ELIGIBILITY CRITERIA</h3>
                        <div className="table-responsive mt-3">
                            <table className="table heading3 " style={{ border: "1px solid black" }}>
                                <thead>
                                    <tr>
                                        <th className='table_text' scope="col" >Parameter</th>
                                        <th className='table_text'>Description</th>
                                    </tr>
                                </thead>
                                <tbody className='table_text2'>
                                    <tr>
                                        <th className='' scope="row">Mandatory Documents</th>
                                        <td>
                                            <ul className="list-unstyled ">
                                                <li>Duly filled application form</li>
                                                <li>PAN Card</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='' scope="row">Proof of Identity</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>Voter ID Card/ Photo ID issued by GOI/Passport/ Driving Licence/Aadhaar Card</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='' scope="row">Proof of Address</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>Aadhaar Card/ Voter ID Card/ Property Tax Receipt/ Driving Licence/ Utility Bill/ Registry Copy/Property Tax Receipt/ Lease or Rent Agreement</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='' scope="row">Business Continuity Proof</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>VAT/ Excise/ Sales Tax/ Service Tax Registration</li>
                                                <li>Trade License/ Copy of partnership deed/ Registration Certificate issued by RBI or SEBI/ Certificate of Practice</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='' scope="row">Signature Proof</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>Banker's Verification/ Passport/ PAN Card</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='' scope="row">Proof of Income</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>Latest ITR</li>
                                                <li>GST returns for the financial year</li>
                                                <li>Latest audited financials</li>
                                                <li>Last 6 months bank statement</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='' scope="row">Other Documents (if applicable)</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>List of Directors</li>
                                                <li>Shareholding patterns</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='business_eligi_2 mt-5 container     '>
                    <h3 className='bus_texts heading4 text-center ' style={{ color: "#900c3f" }}>DOCUMENTS REQUIRED FOR A BUSINESS LOAN</h3>
                    <table class="table mt-4 shadow heading3 " style={{ border: "1px solid black" }}>
                        <thead>
                            <tr>
                                <th scope="col">Parameter</th>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='' scope="row">Mandatory Documents</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>Duly filled application form</li>
                                        <li>PAN Card</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className='' scope="row">Proof of Identity</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>Voter ID Card/ Photo ID issued by GOI/Passport/ Driving Licence/Aadhaar Card</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className='' scope="row">Proof of Address</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>Aadhaar Card/ Voter ID Card/ Property Tax Receipt/ Driving Licence/ Utility Bill/ Registry Copy/Property Tax Receipt/ Lease or Rent Agreement</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className='' scope="row">Business Continuity Proof</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>VAT/ Excise/ Sales Tax/ Service Tax Registration</li>
                                        <li>Trade License/ Copy of partnership deed/ Registration Certificate issued by RBI or SEBI/ Certificate of Practice</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className='' scope="row">Signature Proof</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>Banker's Verification/ Passport/ PAN Card</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className='' scope="row">Proof of Income</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>Latest ITR</li>
                                        <li>GST returns for the financial year</li>
                                        <li>Latest audited financials</li>
                                        <li>Last 6 months bank statement</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className='' scope="row">Other Documents (if applicable)</th>
                                <td>
                                    <ul style={{ listStyleType: "square" }}>
                                        <li>List of Directors</li>
                                        <li>Shareholding patterns</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Businessloan
