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
    name?: string
}

const Input = ({type, placeholder, defaultValue, register, disabled, onChange, name}: InputProps) => {
    console.log(register)
    return (
        <S.Input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register}
            disabled={disabled}
            onChange={onChange}
            name={name}
        />
    )
}

export default Input