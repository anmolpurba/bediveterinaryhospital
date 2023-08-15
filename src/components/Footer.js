import React from 'react'
import mailIcon from "../assets/mailIcon.svg"
import mailIcon1 from "../assets/mailIcon1.png"
import phoneIcon from "../assets/phoneIcon.png"
import location from "../assets/location.png"

const Footer = () => {
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold font-mono text-center mt-10 mb-10'>Give Us A Woof</h1>

            <div className="contacts grid gap-6 sm:flex justify-evenly">
                <div className="mail flex">
                    <img className='w-11 mr-2 ' src={mailIcon1} alt="" />
                    <h2 className='text-xl text-center'>bedivethospital.com</h2>
                </div>

                <div className="phone flex">
                    <img className='w-11 mr-2' src={phoneIcon} alt="" />
                    <h2 className='text-xl'>+91 89918-12882</h2>
                </div>

                <div className="mail flex">
                    <img className='w-11 mr-2' src={location} alt="" />
                    <h2 className='text-xl'>Rayya, Amritsar</h2>
                </div>
            </div>
        </div>

        <div className="mt-10 mb-5 text-center">
            <h1 className='text-gray-500'>© 2023 <a href="https://bediveterinaryhospital.com" class="hover:underline">BediVeterinaryHospital</a>. All Rights Reserved.
            </h1>
        </div>
    </div>
    
  )
}

export default Footer