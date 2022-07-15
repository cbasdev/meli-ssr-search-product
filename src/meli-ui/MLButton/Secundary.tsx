import { IButtonProps } from './index'

const Secundary = ({ onClick, text }: IButtonProps) => {
  return (
    <button
      className=' bg-blue-200 w-full text-blue-50 rounded-md p-2.5 transition-all duration-300 hover:bg-blue-200'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Secundary
