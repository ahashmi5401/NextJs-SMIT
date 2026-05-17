import React from 'react'

const Input = ({value ,  placeholder, handler , field}) => {
  return (
    <input value={value} className='px-6 py-3 rounded-2xl border onfocus::outline-red' type='text' placeholder={placeholder} onChange={(e) => handler(field ,e.target.value)} />
  )
}

export default Input