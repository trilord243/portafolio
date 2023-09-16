"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';




export const Hero = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12 '>
                <div className='col-span-7 place-self-center text-center sm:text-left'  >



                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl ' >   <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' > Hello,I'm   </span>
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
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3 ' >
                            <span clasName="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Donwload cv</span> </button>

                    </div>
                </div>

                <div className='col-span-5 place-self-center mt-4 mb-4 lg:mt-0'>
                    <div className='rounded-full bg-[#948080] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
                        <Image src='/assets/hero-image.png' width={400} height={400} alt='hero image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
                    </div>
                </div>


            </div>



        </section>
    )
}
