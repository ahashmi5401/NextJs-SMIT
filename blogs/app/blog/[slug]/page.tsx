import React from 'react'
import { blogPosts } from '../../../data/blog'

type ParamsType = {
  params: Promise<{
    slug: string
  }>
}

const Page = async ({ params } : ParamsType ) => {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-xl font-semibold">{post?.title}</h1>
      <p className="mt-4 text-gray-600">{post?.title}.</p>
      
    </div>
  )
}

export default Page