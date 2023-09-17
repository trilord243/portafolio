import React from 'react'

export const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? 'mr-3 font-semibold text-white text-white border-b border-purple-500' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}  >
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
                {children}
            </p>
        </button>
    )
}
