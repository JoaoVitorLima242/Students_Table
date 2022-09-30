import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Styles
import * as S from './styles'

type InputProps = {
    type?: string
    defaultValue?: string | number | readonly string[]
    placeholder?: string;
    register: UseFormRegisterReturn<string>;
    disabled?: boolean
}

const Input = ({type, placeholder, defaultValue, register, disabled}: InputProps) => {
    return (
        <S.Input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register}
            disabled={disabled}
        />
    )
}

export default Input