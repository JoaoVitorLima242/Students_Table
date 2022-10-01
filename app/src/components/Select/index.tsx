import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Styles
import * as S from './styles'

type InputProps = {
    children: React.ReactNode 
    defaultValue?: string | number | readonly string[]
    placeholder?: string;
    register?: UseFormRegisterReturn<string>;
    disabled?: boolean
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
    name: string
}

const Select = ({ placeholder, defaultValue, register, disabled, onChange, children, name}: InputProps) => {
    return (
        <S.Input
            placeholder={placeholder}
            defaultValue={defaultValue}
            name={name}
            {...register}
            disabled={disabled}
            onChange={onChange}
        >
            {children}
        </S.Input>
    )
}

export default Select