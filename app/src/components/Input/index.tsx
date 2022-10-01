import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Styles
import * as S from './styles'

type InputProps = {
    type?: string
    defaultValue?: string | number | readonly string[]
    placeholder?: string;
    register?: UseFormRegisterReturn<string>;
    disabled?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({type, placeholder, defaultValue, register, disabled, onChange}: InputProps) => {
    return (
        <S.Input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register}
            disabled={disabled}
            onChange={onChange}
        />
    )
}

export default Input