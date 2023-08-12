import React from 'react'
import heroDog from "../assets/heroDog.jpeg"
import heroDog1 from "../assets/heroDog1.webp"
import heroDog2 from "../assets/heroDog2.avif"
import heroDog3 from "../assets/heroDog3.jpg"
import heroDog4 from "../assets/heroDog4.jpg" 
const Hero = () => {
  return (
    <div className='w-full h-[700px] bg-center bg-cover relative' style={{backgroundImage: `url(${heroDog3})`}}>
        <div className='w-1/5 mt-32 p-2 absolute'>
            <h1 className='italic tracking-wide font-extrabold drop-shadow-lg text-blue-700 text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Improving Life of your Pet</h1>
        </div>
    </div>
  )
}

export default Hero