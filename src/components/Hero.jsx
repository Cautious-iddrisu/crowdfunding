import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../constants'

const Hero = () => {
  return (


    <div className=' space-y-5 py-6 md:flex  max-w-4xl mx-auto px-5 md:py-28 items-center justify-center pt-[25px] md:mt-0 md:overflow-y-hidden '>
        <div className=' space-y-5'>
            <h1 className=' text-4xl uppercase'>Let's Make Impossible Possible</h1>
            <p  className=' text-sm text-gray-400 pb-6'>
                Join us and be part of somthing special,
                Together we make a difference 
            </p>
            <Link to="/iddrisu">
            <button className=' bg-[#DD1A83]  px-4  rounded-lg py-3 animate-pulse'>Start Campaing</button>
            </Link>
        </div>


        <div className=' py-5'>
            <img src={images.coin} alt="coin" className=' w-[550px] ' />
        </div>

        
    </div>

   



  )
}

export default Hero