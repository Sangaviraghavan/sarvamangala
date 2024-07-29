import React from 'react'
import { Link } from 'react-router-dom'
export default function Clarification() {
  return (
   <section className='clarif mt-5 py-5'>
     <div className='container'>
         <div className='row'>
            <div className='col-md-8 mt-5'>
               <h1 className ="heading3 nature-1 fs-4">Schedule an appointment with a financial advisor today!</h1>
               <p className='py-3 heading3 nature-1 fs-5'>We're here to help you achieve your financial dreams!</p>
            </div>
            <div className='col-md-4 py-5 heading3 btn1'>
               <button  >
               <Link to={"contact"}>Give us a call</Link>
               </button>
            </div>
         </div>
        </div>
   </section>

  )
}
