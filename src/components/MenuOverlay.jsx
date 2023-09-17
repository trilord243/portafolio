
"use client"
import React from 'react'
import { NavLink } from './NavLink'

export const MenuOverlay = ({ links }) => {
    console.log(links)

    return (
        <ul className='flex flex-col py-4 items-center' > {links.map((link) => (<li key={link.href} >  <NavLink href={link.href} title={link.tittle} /> </li>))}  </ul>
    )
}
