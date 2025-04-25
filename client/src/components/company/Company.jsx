

import React from 'react'

import img from './../../../public/OIP.jpg'

function Company() {
  return (
    <div className='py-20 min-h-screen' >

        <section>


            <div className='flex md:flex-row flex-col p-8  md:justify-between  justify-center gap-10 '>

                <div className='flex justify-center items-center'>
                    <h2 className='text-5xl font-semibold'>This Ai chatbot make for Bkash</h2>
                    
                </div>
                <div className='flex justify-center items-center '>
                    <img src={img} className='rounded'/>

                </div>


            </div>

            <div className='flex justify-center mt-10'>
            <div className="flex flex-col items-center mt-10 text-center">
    <h2 className="text-2xl font-bold mb-4">Why Use This Type of Service?</h2>
    <p className="mb-2">🔹 Minimize Human Effort - AI reduces the need for human workers, improving efficiency.</p>
    <p className="mb-2">🔹 24/7 Support - Get help anytime, without waiting for office hours.</p>
    <p className="mb-2">🔹 Handle Multiple Customers at Once - AI can assist many users simultaneously, no wait time.</p>
</div>

            </div>

        </section>
       

    </div>
  )
}

export default Company