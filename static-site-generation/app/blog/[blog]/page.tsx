import React from 'react'
interface PageProps {
    params : Promise<{
        blog: string;
    }>
}
//jitne humne sledct karen hai sirf whi hi static genration mai add honge 
export const dynamicParams = false; // Disable dynamic params to ensure static generation
export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()
    
    return data.posts.map((post: any) => ({
        blog: String(post.id)
    }))
}
const page = async ({params} : PageProps) => {
  const { blog } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${blog}`)
  const post = await res.json()
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.body}</p>
    </div>
  )
}

export default page