import React from 'react'
import { GoSearch } from 'react-icons/go'

interface IInput {
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  type?: React.HTMLInputTypeAttribute
}

const MLInput = ({ placeholder, onChange, type }: IInput) => {
  return (
    <>
      <div>
        <div className='relative mb-6'>
          <input
            className='text-md placeholder-gray-50 text-md rounded-sm  w-full p-2 px-4 shadow-sm focus:outline-none'
            type={type}
            placeholder={placeholder}
            onChange={onChange}
          />
          <div className=' text-gray-50 flex border-l my-2 absolute inset-y-0 right-2 items-center pl-3 pointer-events-none'>
            <GoSearch />
          </div>
        </div>
      </div>
    </>
  )
}
export default MLInput
