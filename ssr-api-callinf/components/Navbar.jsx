import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-black text-white  justify-between px-10 items-center py-2'>
        <p className='font-bold'>Users Panel</p>
        <ul className='flex space-x-4 text-lg flex-wrap'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/users"><li>All Users</li></Link>
        </ul>
    </div>
  )
}

export default Navbar