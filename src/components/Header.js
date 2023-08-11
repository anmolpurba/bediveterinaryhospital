import React from 'react'
import logo3 from '../assets/logo3.png'
import hamburger from '../assets/hamburger.png'
import { useState } from 'react'

const Header = () => {

    const [isMenuOpen, SetisMenuOpen] = useState(false);

  return (
    <>
        <div className='flex justify-between w-full'>
            <div className='logoDesc p-2 flex'>
                <div className='logo w-1/12'>
                    <img src={logo3} className='w-11/12' alt="website dog logo" />
                </div>
                <div className='mt-3 '>
                    <h1 className='text-2xl font-semibold text-gray-700 tracking-wide'>BEDI<span className='text-logoColor font-extrabold'>VETERINARY</span>HOSPITAL</h1>
                    <h2 className='text-2xl font-medium text-gray-700 tracking-wide flex justify-center line'>Pet Clinic & Surgery</h2>
                </div>
                
            </div>

            <div className="navItems font-semibold text-xl w-1/2 text-logoColor p-6 hidden lg:block">
                <ul className='flex w-full justify-end gap-5 cursor-pointer'>
                    <li className='duration-300 ease-in-out hover:text-gray-700'>About Us</li>
                    <li className='duration-300 ease-in-out hover:text-gray-700'>Our Services</li>
                    <li className='duration-300 ease-in-out hover:text-gray-700'>Contact Us</li>
                </ul>
            </div>

            <div className='p-6 visible lg:hidden'>
                <img className='cursor-pointer h-[40px] w-[40px]' onClick={() => {SetisMenuOpen(!isMenuOpen)}} src={hamburger} alt="" />

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
    </>
  )
}

export default Header