import { IButtonProps } from './index'

const PrimaryButton = ({ onClick, text }: IButtonProps) => {
  return (
    <button
      className=' bg-blue-50 w-full text-white-0 rounded-md p-2.5 transition-all duration-300 hover:bg-blue-100'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
