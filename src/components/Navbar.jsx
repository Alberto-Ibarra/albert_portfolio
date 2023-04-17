import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
    return (
            <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-2xl font-consolas'>Alberto Ibarra</h1>
                <ul className='flex items-center'>
                    {/* <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill/></li> */}
                    <li><a href='#' className='bg-gradient-to-r from-teal-300 to-emerald-300 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
                </ul>
            </nav>
    )
}

export default Navbar
