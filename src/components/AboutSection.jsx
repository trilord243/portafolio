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
                    <p className='text-base md:text-lg' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur blanditiis, dicta, eum itaque, tempora quasi porro commodi reiciendis aut molestiae impedit earum. Nesciunt quidem tempora provident dolor, quo iusto? </p>
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
