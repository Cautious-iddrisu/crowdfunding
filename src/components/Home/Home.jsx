import React from 'react'
import { Link } from 'react-router-dom'
import { Dashboard } from '../../pages'
import Hero from '../Hero'
import Nav from './Nav'

const Home = () => {
  return (
    <div className=' bg-gradient-to-tl from-[#06011C] to-[#1A4C5C] h-[100vh] text-gray-300 font-bold '>
      <Nav />
      <Hero />

    </div>
  )
}

export default Home