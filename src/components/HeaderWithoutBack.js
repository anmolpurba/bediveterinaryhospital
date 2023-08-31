import React from 'react'
import logo5 from '../assets/logo5.jpg'
import logo3 from "../assets/logo3.png"
import hamburger from '../assets/hamburger.png'
import hamburger1 from '../assets/hamburger1.svg'
import { useState } from 'react'
import Hero from './Hero'
import heroDog5 from "../assets/catHero.webp"
import OurServices from './OurServices'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'

const HeaderWithoutBack = () => {

    const [isMenuOpen, SetisMenuOpen] = useState(false);

  return (
    <div>
        <div className='flex justify-between'>
            <div className='flex-initial'>
                <div className='logoDesc p-2 flex'>
                    <div className='logo'>
                        <img src={logo3} className='w-24' alt="website dog logo" />
                    </div>
                    <div className='mt-3'>
                        <h1 className='text-2xl font-semibold text-gray-700 tracking-wide'>BEDI<span className='text-logoColor font-extrabold'>VETERINARY</span>HOSPITAL</h1>
                        <h2 className='text-2xl font-medium text-gray-700 tracking-wide flex justify-center line'>Pet Clinic & Surgery</h2>
                    </div>
                </div>
            </div>
            <div className="navItems font-semibold text-xl text-logoColor p-6 hidden lg:block">
                <ul className='flex justify-end gap-5 cursor-pointer'>
                    <Link to="/"> <li className='duration-300 ease-in-out hover:text-gray-700'>Home</li> </Link>
                    <Link to="/about"> <li className='duration-300 ease-in-out hover:text-gray-700'>About Us</li> </Link>
                </ul>
            </div>

            <div className='p-6 flex-none visible lg:hidden'>
                <img className='cursor-pointer h-[40px] w-[40px] ' onClick={() => {SetisMenuOpen(!isMenuOpen)}} src={hamburger1} alt="" />

            </div>

        </div>

        <div>
            {isMenuOpen ? <div className='onClickOpen'>
                    <ul className='cursor-pointer'>
                        <li className='duration-300 ease-in-out hover:text-gray-700'>About Us</li>
                        <li className='duration-300 ease-in-out hover:text-gray-700'>Our Services</li>
                        <li className='duration-300 ease-in-out hover:text-gray-700'>Contact Us</li>
                    </ul>
                </div>:null}
        </div>

        <Outlet />
    </div>
  )
}

export default HeaderWithoutBack