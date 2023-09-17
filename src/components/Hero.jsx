"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';



export const Hero = () => {
    return (
        <section className='lg:py-16' >
            <div className='grid grid-cols-1 lg:grid-cols-12 '>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} trans={{ duration: 0.5 }} className='col-span-8 place-self-center text-center sm:text-left justify-self-start '  >



                    <h1 className='text-white mb-4 text-4xl lg:text-8xl lg:leading-normal font-extrabold sm:text-5xl ' >   <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500' > Hello,I'm   </span>
                        <br />

                        <TypeAnimation
                            sequence={[

                                'Felipe',
                                1000,
                                'Web developer',
                                1000,
                                'Zebra developer',
                                1000,
                                'React developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        /></h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl ' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio vero alias aspernatur officia magnam iusto itaque fugiat autem aliquam culpa quibusdam nostrum facilis dolorem saepe, laboriosam omnis voluptatum. Atque? </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 via-secondary-600 to-secondary-400 hover:bg-primary-700 text-white'>Hire Me</button>
                        <button className='px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-primary-600 via-secondary-600 to-secondary-400 hover:bg-slate-800 text-white  mt-3 ' >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Donwload cv</span> </button>

                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} trans={{ duration: 0.5 }} className='col-span-4 place-self-center mt-4 mb-4 lg:mt-0'>
                    <div className='rounded-full bg-[#948080] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
                        <Image src='/assets/hero-image.png' width={400} height={400} alt='hero image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
                    </div>
                </motion.div>


            </div>



        </section>
    )
}
