'use client'
import Link from 'next/dist/client/link'
import React, { use, useEffect, useState } from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1 className='text-3xl font-bold'>See All Users</h1>
      <Link href="/users"><button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>All Users</button></Link>
    </div>
  )
}

export default page