

import React from 'react'
import { motion } from "motion/react"

function Blog() {
  return (
    <div className='py-20 min-h-screen'>
        
        <section className='p-6'>
            <div className='h-40 text-center'>

                <motion.h2 
                
                initial={{opacity:0,scale:0,}}
                
                animate={{opacity:1, scale:1}}
               
                transition={{duration:0.3, delay:0.2,}}
                
                className='text-4xl font-semibold'>🤖 Why Use AI for bKash <span className='text-green-400'>Customer</span> Support?</motion.h2>
            </div>

            <div className='flex justify-center flex-col gap-5 text-center space-y-10'>

                <motion.div

                initial={{opacity:0,scale:0,x:100, visibility:"hidden"}}

                whileInView={{visibility:"visible"}}

                animate={{opacity:1, scale:1.0,x:0,visibility:"visible"}}
                transition={{duration:0.6, delay:0.5}}


                


                 className='border h-24 border-stone-800/60 p-3' >

                    <h2 className='text-2xl font-semibold'>✅ 24/7 Support</h2>

                    <p className='mt-4'> AI never sleeps. It answers questions anytime, day or night.</p>

                </motion.div>


                <motion.div
                                initial={{opacity:0,scale:0,x:100, visibility:"hidden"}}

                                whileInView={{visibility:"visible"}}
                
                                animate={{opacity:1, scale:1.0,x:0,visibility:"visible"}}
                                transition={{duration:0.6, delay:0.5}}

                 className='border h-24 border-stone-800/60 p-3'>

                    <h2  className='text-2xl font-semibold'>⚡ Fast Replies</h2>
                    <p className='mt-4'>No need to wait on hold or talk to a real agent. AI replies instantly.</p>

                </motion.div>

                <motion.div 

                initial={{visibility:"hidden"}}
                animate={{visibility:"visible"}}
                transition={{duration:0.3, delay:0.2}}
                
                className='border h-24 border-stone-800/60 p-3'>
                    <h2 className='text-2xl font-semibold'>🗣️ Bangla + English Support</h2>

                    <p className='mt-4'> Users can ask in Bangla or English, AI understands both.</p>

                </motion.div>

                <motion.div 
                initial={{y:10,scale:0.4}}
                animate={{y:0, scale:1.0}}

              
                transition={{duration:0.5, delay:0.4, ease:"easeInOut"}}


                
                
                className='border h-24 border-stone-800/60 p-3'>
                    <h2 className='text-2xl font-semibold'>🤯 No Human Needed</h2>
                    <p className='mt-4'> Saves cost. One AI bot can help 1000+ users at the same time.</p>
                </motion.div>

                <motion.div initial={{opacity:0}}

                whileInView={{opacity:1}}
                transition={{duration:0.3, delay:0.2}}
                

              
                
                className='border h-24 border-stone-800/60 p-3' >
                    <h2 className='text-2xl font-semibold'>👶 Easy for Everyone</h2>
                    <p className='mt-4'>Even users who don’t know tech can just ask questions and get help.</p>

                </motion.div>


                <motion.div 

                initial={{opacity:0, scale:0}}

                whileInView={{opacity:1, scale:1}}

                transition={{duration:0.3, delay:0.2, stiffness:true}}
                
                
                
                
                className='border h-24 border-stone-800/60 p-3'>
                    <h2 className='text-2xl font-semibold'>📚 Always Updated</h2>
                    <p  className='mt-4'>You can update the AI with new info or services without rebuilding everything.</p>
                </motion.div>


            </div>

        </section>




    </div>
  )
}

export default Blog