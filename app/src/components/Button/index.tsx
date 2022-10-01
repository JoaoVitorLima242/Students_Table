import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
}

const Button = ({children, disabled, onClick}: ButtonProps) => {
    return (
        <S.Button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </S.Button>
    )
}

export default Button