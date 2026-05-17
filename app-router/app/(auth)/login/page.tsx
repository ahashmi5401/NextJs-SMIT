'use client'
import Input from '@/app/components/Input'
import router from 'next/dist/shared/lib/router/router'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const router = useRouter()
  const [form , setForm] = useState({
    email : '',
    password : ''
  })
  const handleInputChange = (field , value) => {
    setForm({...form , [field] : value})
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(!form.email || !form.password) return alert('Please fill all the fields')
    console.log(form);
    router.push('/dashboard')
    
  }
   return (
    <div className='h-screen w-full flex justify-center items-center'>
    <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-6 w-full max-w-md mx-auto mt-10 border p-6 rounded-2xl'>
        <h2 className='text-center font-sans text-2xl'>Welcome Back</h2>
        <Input placeholder={'email'} value={form.email} handler={handleInputChange} field={'email'}/>
        <Input placeholder={'password'} value={form.password} handler={handleInputChange} field={'password'}/>
        <div className='flex justify-center items-center'>
        <button className='border px-4 py-2 w-50 cursor-pointer hover:bg-gray-200'>Sign In</button>
        </div>
    </form>
    </div>
  )
}

export default page
