import React from 'react'
import roundDog from "../assets/roundDog.jpg"

const Info = () => {
  return (
    <div className='flex p-5 border-solid border-2 border-logoColor mt-2 '>
        <div className="image min-w-[200px]">
            <img className='w-full' src={roundDog} alt="" />
        </div>
        <div className='m-5'>
            <h1 className='text-4xl font-serif font-semibold text-center mb-4'>Welcome To Bedi Veterinary Hospital </h1>
            <p className='text-xl text-left font-serif tracking-wider'>Bedi Veterinary Hospital is dedicated to offering comprehensive veterinary care, encompassing a wide range of services such as thorough physical examinations, proactive preventive medicine, essential vaccinations, professional dentistry, spaying/neutering procedures, as well as specialized surgeries including orthopedic and LASER surgery. Our commitment extends to conducting diagnostic lab work, providing tailored senior pet care, and offering expert pet nutrition consultancy.At Bedi Veterinary Hospital, your pet's well-being is our top priority. By combining compassionate care with cutting-edge veterinary technology, we are resolute in delivering the finest quality of treatment. Our goal is to ensure your pet's health and happiness, aligning with our core mission. We emphasize the significance of preventive care, which encompasses routine wellness check-ups and consistent vaccination protocols. When advanced diagnostics and treatments are necessary, our hospital stands ready equipped with advanced in-house diagnostic labs, radiography facilities, and LASER surgery capabilities, all geared towards providing the best care for your beloved companion.</p>
        </div>
    </div>
  )
}

export default Info