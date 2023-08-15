import React from 'react'
import ServiceCard from './ServiceCard'
import petgroom from "../assets/petgroom.jpg"
import { services } from '../utils/constants'

const OurServices = () => {
  return (
    <div className=''>
        <h1 className='text-3xl font-bold font-mono text-center mt-14 mb-10'>Services</h1>

        <div className='grid grid-cols-fill-40 gap-7 items-center justify-center'>
            {services.map((service) => {return <ServiceCard url={service.image_url} title={service.name} desc={service.description} />})}
            {/* <ServiceCard url={petgroom} title={"Pet Grooming Services"} desc={"Enhance the look of your pet by giving them a grand hair cut, spa shower and many other beauty touch up."} />
            <ServiceCard />
             */}
        </div>
    </div>
  )
}

export default OurServices