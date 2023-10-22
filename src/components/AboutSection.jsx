"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton'

const TAB_DATA = [
    {
        tittle: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mysql</li>
                <li>Enterprise browser</li>
                <li>React.js</li>
                <li>Zebra equipments</li>
                <li>Javascript </li>
                <li> Python</li>
                <li> Arduino</li>
                <li> React Native</li>
                <li> Java</li>
                <li> Kotlin</li>
            </ul>
        )

    }, {
        tittle: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Student Metropolitan Metropolitanda</li>
                <li>Zebra Technologies</li>
                <li>Zebra education program</li>


            </ul>
        )

    }, {
        tittle: 'Certification',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Platzi</li>
                <li>Udemy </li>
                <li>Zebra developer portal </li>

            </ul>
        )

    }
]

export const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }



    return (
        <section className='text-white p-8 shadow-xl rounded-lg' id='about'>
            <div className='md:grid md:grid-cols-1/3-2/3 gap-6 items-start py-6 px-4 sm:py-12 sm:px-8'>
                <div className='flex justify-center items-center'>
                    <Image src='/assets/about-image.png' width={500} height={500} alt='about image' className='rounded-full shadow-md' />
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-11 text-center ' id='skills'>About Me</h2>
                    <div className='text-lg mb-10 leading-relaxed text-center mt-5 '>
                        <p>From the foundation of barcode printer technician with Zebra Technologies to today s specialization, my journey in the tech world has been marked by continuous learning and passion. My expertise lies in web development, having honed my skills with Node.js, Express, React.js, Next.js, and React Native. But my capabilities don t stop there. I m also adept in data management, data structure solutions, and API creation, ensuring that your projects benefit from precision and efficiency.</p>
                        <p className="mt-4">Venturing into the world of Internet of Things (IoT), I ve gained hands-on experience with Arduino, crafting innovative solutions that bridge the digital and physical realms. Furthermore, I m familiar with Tailwind CSS for intuitive user interface design, and Zebra Enterprise Browser for specialized applications.</p>
                        <p className="mt-4">Beyond software, my knowledge extends to creating circuits that trigger processes, be it through Arduino or utilizing the GPIO capabilities of Zebra devices. This unique blend of hardware and software expertise positions me at the forefront of automating and optimizing complex processes.</p>
                        <p className="mt-4">In essence, my love for technology and drive to innovate keeps me pushing the boundaries of what s possible. I m committed to harnessing the power of modern tools and technologies to offer unparalleled solutions.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                        {TAB_DATA.map(t => (
                            <TabButton key={t.id} selectTab={() => handleTabChange(t.id)} active={tab === t.id}>
                                {t.tittle}
                            </TabButton>
                        ))}
                    </div>
                    <div className='p-4 rounded shadow-md'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );

}
