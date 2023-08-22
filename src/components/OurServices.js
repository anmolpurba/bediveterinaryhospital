import React from 'react'
import ServiceCard from './ServiceCard'
import petgroom from "../assets/petgroom.jpg"
import { services } from '../utils/constants'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <div className=''>
        <h1 className='text-3xl font-bold font-mono text-center mt-[-70px] mb-10'>Services</h1>

        <div className='grid grid-cols-fill-40 gap-7 items-center justify-center'>
            {services.map((service) => {return <Link to={"/serviceinfo/"+service.id} key={service.id}> <ServiceCard url={service.image_url} title={service.name} desc={service.description} /> </Link>})}
        </div>
    </div>
  )
}

export default OurServices