import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
}

const Button = ({children, disabled}: ButtonProps) => {
    return (
        <S.Button
            disabled={disabled}
        >
            {children}
        </S.Button>
    )
}

export default Button