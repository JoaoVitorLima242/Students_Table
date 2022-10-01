import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    color?: string
    onClick?: () => void
}

const ButtonIcon = ({children, onClick, color}: ButtonProps) => {
    return (
        <S.Button
            onClick={onClick}
            color={color}
        >
            {children}
        </S.Button>
    )
}

export default ButtonIcon