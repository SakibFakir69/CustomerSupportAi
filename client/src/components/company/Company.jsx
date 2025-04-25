

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
                <h2>Why use this type services</h2>
                <p>Minimize their human worker</p>
                <p>24/7 support</p>
                <p>Mutipile Customer at a time</p>
            </div>

        </section>
       

    </div>
  )
}

export default Company