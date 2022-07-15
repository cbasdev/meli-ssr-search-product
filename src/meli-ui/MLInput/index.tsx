import React from 'react'
import { GoSearch } from 'react-icons/go'

interface IInput {
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
  type?: React.HTMLInputTypeAttribute
  name?: string
}

const MLInput = ({ placeholder, onChange, onClick, type, name }: IInput) => {
  return (
    <>
      <div>
        <div className='relative mb-6'>
          <input
            className='text-md placeholder-gray-50 text-md rounded-sm  w-full p-2 px-4 shadow-sm focus:outline-none'
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
          />
          <div
            onClick={onClick}
            className='text-gray-50 flex border-l my-2 absolute inset-y-0 right-4 items-center pl-3 cursor-pointer'
          >
            <GoSearch />
          </div>
        </div>
      </div>
    </>
  )
}
export default MLInput
