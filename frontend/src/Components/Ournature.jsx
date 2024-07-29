import React from 'react'
import ournature1 from '../Assets/img/nature1.jpg'
import ournature2 from '../Assets/img/nature2.jpg'


function Ournature() {
    return (
        <section className='' id='goals'>
            <div class="area position-relative" >
                <div className='container'>
                    <div className='row py-5 paperrocket3'>
                        <div className='col-md-5 d-flex justify-content-center align-items-center'>
                            <div className=''>
                                <div className=''>
                                <h4 className='heading4 text-white'>Our <span className='heading4' style={{ color: "#900c3f" }}> Goal</span></h4>
                                    <h1 className='pt-2 fs-4 text-light nature-1 heading3 mt-3'>We Finance It. Secure Funding for Your Ambitions with Sarvamangala.</h1>
                                    <h4 className='pt-4 nature-primary1 nature-1 heading1 fs-4 ' style={{color:"#900c3f"}}>Growth Never Stops.</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='row'>
                                <div className='d-flex pt-2'>
                                    <div className='col-5'>
                                        <div className='nature-part'>
                                            <img src={ournature1} alt="" className='img-fluid rounded-2' />
                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <div className='nature-part1'>
                                            <img src={ournature2} alt="" className='img-fluid rounded-2' />
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
            </div >

        </section>
    )
}

export default Ournature