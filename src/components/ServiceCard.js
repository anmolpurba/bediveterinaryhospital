import React from 'react'
import petgroom from "../assets/petgroom.jpg"

const ServiceCard = () => {
  return (
    <div className='w-1/6'>
        <div className='w-full'>
            <img className='rounded-lg' src={petgroom} alt="" />
        </div>
        <h1 className=''>Pet Grooming Services</h1>
        <h3>Enhance the look of your pet by giving them a grand hair cut, spa shower and many other beauty touch up.</h3>
    </div>
  )
}

export default ServiceCard