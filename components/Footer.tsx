import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <footer className="bg-[var(--color1)] text-center p-4">
            <p className="text-[var(--color2)]">&copy; {new Date().getFullYear()} Tech Blog. All rights reserved.</p>
            <p>Developed by <Link href='https://github.com/Surajsingh-6' className='text-blue-900 font-semibold hover:underline'>Suraj Singh U</Link></p>
        </footer>
        
    </div>
  )
}

export default Footer