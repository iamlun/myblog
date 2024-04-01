import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 backdrop-blur-md bg-blue-800 w-full">
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link 
            href="/" 
            className='flex justify-center items-start text-white text-xl font-light'
        >Lun's blog</Link>
      <div className=' text-white text-xl font-light'>登入</div>
      </nav>
    </header>
  )
}

export default Navbar