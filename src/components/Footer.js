import React from 'react'
import mailIcon from "../assets/mailIcon.svg"
import mailIcon1 from "../assets/mailIcon1.png"
import phoneIcon from "../assets/phoneIcon.png"
import location from "../assets/location.png"

const Footer = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold font-mono text-center mt-10 mb-10'>Give Us A Woof</h1>

        <div className="contacts flex justify-evenly">
            <div className="mail">
                <img className='w-11 ' src={mailIcon1} alt="" />
                <h2 className='text-xl text-center'>bedivethospital.com</h2>
            </div>

            <div className="phone">
                <img className='w-9' src={phoneIcon} alt="" />
                <h2 className='text-xl'>+91 89918-12882</h2>
            </div>

            <div className="mail">
                <img className='w-14' src={location} alt="" />
                <h2 className='text-xl'>Rayya, Amritsar</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer