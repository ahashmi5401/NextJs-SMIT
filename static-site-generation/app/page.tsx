import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <Link href="/blog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      See Blog
    </Link>
  )
}

export default page