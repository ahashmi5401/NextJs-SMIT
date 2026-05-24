import React from 'react'
import { cookies } from 'next/headers'
const dynamic = 'force-dynamic'; // Force dynamic rendering for this page

//2nd methodd how we forcefully do dyynamic rendring on satis page  by using searchParams
const page = async ({searchParams} : any) => {
  const search = await  searchParams

  //3rd method  how we forcefully do dyynamic rendring on satis page 
  const cooky = await cookies()
return (
    <div>Muhammad Ayan Hashmi</div>
  )
}

export default page