import React from 'react'
import petgroom from "../assets/petgroom.jpg"

const ServiceCard = (props) => {
  return (
    <div className='cursor-pointer'>
        <div className='w-full'>
            <img className='rounded-2xl' src={props.url} alt="" />
        </div>
        <div className='mt-3'>
            <h1 className='text-center text-xl font-semibold font-serif'>{props.title}</h1>
            <h3 className='text-gray-700 text-center '>{props.desc}</h3>
        </div>
    </div>
  )
}

export default ServiceCard