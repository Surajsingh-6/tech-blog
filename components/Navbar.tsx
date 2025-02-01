import React from 'react'
import Link from 'next/link'
import '@/app/globals.css'
function Navbar() {
  return (
    <header className='w-full h-20 flex justify-between items-end px-16 fixed top-0 bg-[var(--color-2)]'>
        <h1 className='m_sc_font text-4xl'>TECH in 60s</h1>
        <nav className='flex justify-center items-center space-x-16 text-3xl'>
            <div><Link href='/'>Home</Link></div>
            <div><Link href='/blogs'>Blogs</Link></div>
            <div><Link href='/about'>About</Link></div>
            {/* <div><Link href='/contact'>Contact</Link></div> */}
        </nav>
    </header>
  )
}

export default Navbar