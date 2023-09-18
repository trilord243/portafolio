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

            </ul>
        )

    }, {
        tittle: 'Certification',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Platzi</li>
                <li>Udemy </li>

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
        <section className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16' >
                <Image src='/assets/about-image.png' width={500} height={500} alt='about image' className='rounded-full' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>

                    <h2 className='text-4xl font-bold  text-white mb-4' > About Me </h2>
                    <p className='text-base md:text-lg' > From the foundation of barcode printer technician with Zebra Technologies to today's specialization, my journey in the tech world has been marked by continuous learning and passion. My expertise lies in web development, having honed my skills with Node.js, Express, React.js, Next.js, and React Native. But my capabilities don’t stop there. I'm also adept in data management, data structure solutions, and API creation, ensuring that your projects benefit from precision and efficiency.

                        Venturing into the world of Internet of Things (IoT), I've gained hands-on experience with Arduino, crafting innovative solutions that bridge the digital and physical realms. Furthermore, I'm familiar with Tailwind CSS for intuitive user interface design, and Zebra Enterprise Browser for specialized applications.

                        Beyond software, my knowledge extends to creating circuits that trigger processes, be it through Arduino or utilizing the GPIO capabilities of Zebra devices. This unique blend of hardware and software expertise positions me at the forefront of automating and optimizing complex processes.

                        In essence, my love for technology and drive to innovate keeps me pushing the boundaries of what's possible. I'm committed to harnessing the power of modern tools and technologies to offer unparalleled solutions. </p>
                    <div className='flex flex-row mt-8' >
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'} > Skills </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === 'education'} > Education </TabButton>
                        {/* <TabButton selectTab={() => handleTabChange("experience")} active={tab === 'Experience'} > Experience </TabButton> */}
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === 'certifications'} > Certification </TabButton>





                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}



                    </div>
                </div>




            </div>
        </section>
    )
}
