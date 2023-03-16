import {useState} from 'react'

import { Link } from 'react-router-dom'
import { Bars3BottomRightIcon, XMarkIcon  } from '@heroicons/react/24/solid'


const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false)   
          
  return (
    // <div className=' flex   '>

    <div className='flex justify-between items-center max-w-4xl mx-auto py-5 px-5  '>
        <h1 className=''>CROWD <span className='text-[#DD1A83] animate-pulse '>FUNDING</span></h1>

        <div className=' space-x-4 flex' >
            <div className=' hidden md:block space-x-4 text-sm'>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Donate</Link>
            <Link to="/about">About</Link>

            <button className=' bg-[#DD1A83] px-4 py-1 rounded-md items-center shadow-2xl animate-pulse'>Login</button>
            </div>
        </div>

        <div className=' md:hidden relative'>
            <Bars3BottomRightIcon  className="w-6 h-6 fixed right-5 top-5" onClick={()=> setToggleMenu(true)} />
            {toggleMenu && (
                <div className='bg-[#1c1c24] h-[410px] w-[200px] z-10 absolute -right-4 -top-3 items-center flex-col shadow-2xl transition-all '>
                    <XMarkIcon className=' w-6 h-6 fixed top-5 right-5 z-10  bg-[#DD1A83] rounded-full ' onClick={()=> setToggleMenu(false)} />
                    <div className=' flex flex-col items-center justify-center py-10 space-y-5'>

                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Donate</Link>
                     <Link to="/about">About</Link>
                    <button className=' bg-[#DD1A83] px-5 rounded-lg items-center shadow-2xl animate-pulse'>Login</button>
                    </div>
                </div>
            )}
        </div>
    </div>

    // </div>

  )
}

export default Nav