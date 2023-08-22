import React from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../utils/constants';

const ServiceInfo = () => {

    const {id} = useParams();

    const service = services[id];

  return (
    <div className=''>
        <img className='w-44' src={service.image_url} alt="" />
        <h2>{service.longDescription}</h2>
    </div>
  )
}

export default ServiceInfo