"use client"
import React, { useState } from 'react'
import githubIcon from '../../public/github-icon.svg'
import linkedinIcon from '../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        console.log(data)
        const JSONdata = JSON.stringify(data)
        const endpoint = "api/send"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options)
        const resData = await response.json()
        console.log(resData)
        if (response.status === 200) {
            //alert('Message sent')
            setEmailSubmitted(true)
        }
    }
    return (
        <section className='grid md:grid-cols-2 my-2 md:my-2 py-24 gap-4 relative' >
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 left-0 transform translate-x-0 translate-y-0'></div>

            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2' >Let's connect </h5>

                <p className='text-[#ADB7BE]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi iste alias quibusdam beatae deleniti delectus facilis, iusto, inventore, consectetur labore optio voluptates rerum. Numquam eum, nesciunt adipisci reprehenderit expedita natus!</p>
                <div className='socials flex flex-row gap-2'>



                    <Link href="https://www.youtube.com/watch?v=Kb1f5bvF6f4" >  <Image src={githubIcon} alt='github icon' ></Image>  </Link>
                    <Link href="linkedin.com" >  <Image src={linkedinIcon} alt='linkedin icon' ></Image>  </Link>
                </div>
            </div>
            <form className='flex flex-col ' onSubmit={handleSubmit}>
                <div className='mb-6'>

                    <label htmlFor='email' className='text-white block mb-2  text-sm font-medium' >Email</label>
                    <input name="email" type="email" id='email' required placeholder='email@example.com' className='bg-[#18191E] border placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />

                </div>
                <div className='mb-6' >


                    <label htmlFor='subject' className='text-white block mb-2  text-sm font-medium' >Subject</label>
                    <input name='subject' type="text" id='subject' required placeholder='Hello there!' className='bg-[#18191E] border placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                </div>

                <div className='mb-6'>
                    <label htmlFor="message" className=' text-white block text-sm mb-2 font-medium ' >
                        Message</label>
                    <textarea name="message" id="message" placeholder='I would like to have a talk!' className='bg-[#18191E] border placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' ></textarea>
                </div>
                <button type='submit' className='bg-secondary-500 hover:bg-secondary-600 text-white font-medium  py-2.5 rounden-lg w-full' > Send message! </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2' >Email sent!</p>
                    )
                }
            </form>
        </section>
    )
}
