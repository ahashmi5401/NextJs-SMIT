'use client'
import React from 'react'
import Input from '../../components/Input'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const [form , setForm] = React.useState({
    email : '',
    password : ''
  })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //allow special character also in password and minimum 8 characters with at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  const handleInputChange = (field , value) => {
    setForm({...form , [field] : value})
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(!form.email || !form.password) return alert('Please fill all the fields')
    if(!emailRegex.test(form.email)) return alert('Please enter a valid email address')

      if(!passwordRegex.test(form.password)) return alert('password must contain at least 8 characters, including one letter and one number')
      alert('Account created successfully')
    console.log(form);
   // Linking to login page after successful signup can be done using useRouter from next/navigation
   //use userouter is only call in body function
    router.push('/login')
    
  }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-6 w-full max-w-md mx-auto mt-10 border p-6 rounded-2xl'>
        <h2 className='text-center font-sans text-2xl'>Create Account</h2>
        <Input placeholder={'email'} value={form.email} handler={handleInputChange} field={'email'}/>
        <Input placeholder={'password'} value={form.password} handler={handleInputChange} field={'password'}/>
        <div className='flex justify-center items-center'>
        <button className='border px-4 py-2 w-50 cursor-pointer hover:bg-gray-200'>Sign Up</button>
        </div>
    </form>
    </div>
  )
}

export default page