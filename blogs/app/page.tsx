import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' px-8 py-4 flex - justify-center items-center flex-col h-screen w-full'>
      <h1 className="p-6 text-2xl font-bold">Welcome to the Blog Home Page</h1>
      <p className="p-6 text-lg">Here you can find all the latest blog posts.</p>
      <Link href="/blog" className="p-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        View Blog Collection
      </Link>
    </div>
  )
}

export default page
