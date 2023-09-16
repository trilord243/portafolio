import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav>
            <div className='flex flex-wrap items-center' >
                <Link href={"/"} >LOGO </Link>
                <div className='menu' ></div>
            </div>
        </nav>
    )
}
