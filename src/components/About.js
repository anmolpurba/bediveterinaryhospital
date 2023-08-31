import React from 'react'
import { Outlet } from 'react-router-dom'
import about from "../assets/about.png"
import roundDog from "../assets/roundDog.jpg"

const About = () => {
  return (
    <>
        <Outlet />
        <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div className="lg:max-w-md">
                            <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                    About Us
                                </h1>
                            </div>
                            <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Bedi Veterinary Hospital provides comprehensive veterinary care for small and large animals as a hospital for routine wellness and care for pets This hospital will act as vital platform to the veterinary under graduate students, graduate veterinarians, and veterinary nursing students for providing practical hands-on training in an actual hospital setting for the next generation of veterinarians and veterinary nurses. Complimented by a team of exceptional veterinary Doctors and technicians and other supporting staff members, we aim to ensure that your pet visiting the hospital is in great hands whether for routine pet care, specialty care, or emergency services.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <img src={about} alt="" className="relative z-40 object-cover w-full h-full rounded" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About