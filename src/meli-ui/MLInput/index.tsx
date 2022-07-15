import React from 'react'

interface IInput {
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  type?: React.HTMLInputTypeAttribute
}

const MLInput = ({ placeholder, onChange, type }: IInput) => {
  return (
    <>
      <input
        className='w-full p-2 px-4 rounded-sm shadow-sm placeholder-gray-50 text-md '
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}
export default MLInput
