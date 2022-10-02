import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    color?: string
    onClick?: () => void
}

const Button = ({children, disabled, onClick, color}: ButtonProps) => {
    return (
        <S.Button
            onClick={onClick}
            disabled={disabled}
            color={color}
        >
            {children}
        </S.Button>
    )
}

export default Button