"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => { return import('react-animated-numbers') }, { ssr: false })

const achievementList = [
    {
        metric: 'Projects',
        value: '30',
        postfix: '+',
    },
    {
        metric: 'Courses',
        value: '50',
        postfix: '+',
    },

    {
        metric: 'Years of Experience',
        value: '4',
        postfix: '',

    }
]

export const AchviementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-10 sm:py-16 xl:px-16' >
            <div className='border-[#33353F] border rounded-md py-8 px-4 sm:px-6 md:px-8 xl:px-17 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0'>
                {achievementList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center mx-2 sm:mx-4' >
                            <h2 className='text-white text-3xl sm:text-4xl font-bold flex flex-row items-center'>
                                {achievement.postfix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale='en-US'
                                    className="text-white text-3xl sm:text-4xl font-bold"
                                    configs={((_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tension: 140 * (index + 1),
                                        }
                                    })}
                                />
                            </h2>
                            <p className='text-[#ADB7BE] text-base sm:text-lg' > {achievement.metric} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

