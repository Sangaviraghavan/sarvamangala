import React from 'react'

export default function MainCard() {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row align-items-center justify-content-center gx-2 main-card">
                    <div className="col-md-4">
                        <div className="normal-card d-flex flex-column rounded-0">
                            <p className='bg-no'>01</p>
                            <p className=' text-white heading3 fs-5'>Big business loans, </p>
                            <h1 className=' text-white heading4'>bigger possibilities</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="normal-card d-flex flex-column rounded-0">
                        <p className='bg-no'>02</p>
                            <p className='text-white heading3 fs-5'>We finance,</p>
                            <h1 className=' heading4' style={{color:"#900c3f"}}>India&#39;s future</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="normal-card d-flex flex-column rounded-0">
                            <p className='bg-no'>03</p>
                            <p className='text-white heading3 fs-5'>Competitive rates, </p>
                            <h1 className='text-white heading4 '>flexible terms</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
