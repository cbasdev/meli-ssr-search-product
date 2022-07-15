import PrimaryButton from './Primary'
import SecondaryButton from './Secundary'

export const enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface IButton {
  variant: ButtonType
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset' | undefined
}

const MELIButton = ({ variant, text, onClick }: IButton) => {
  return (
    <>
      {variant === ButtonType.Primary ? (
        <PrimaryButton onClick={onClick} text={text} />
      ) : (
        <SecondaryButton onClick={onClick} text={text} />
      )}
    </>
  )
}

export default MELIButton
