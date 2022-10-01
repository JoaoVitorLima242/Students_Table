import styled, { css } from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({
  className: 'input-group'
}))`
  position: relative;
`

export const Input = styled.input.attrs(() => ({
  className: 'form-control'
}))`
  ${({theme}) => css`
    margin-bottom: 0px;
    padding: 10px 18px;
    border-style: solid;
    border-width: 1px;
    border-color: #e1e6f0;
    border-radius: 8px;
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px!important;
    font-size: 18px;
    background-color: ${theme.colors.white.primary};
    z-index: 7;

    :focus {
      box-shadow: 0 0 0 0.25rem ${theme.colors.purple.primary}20;
      border-color: ${theme.colors.purple.primary}50;
      background-color: ${theme.colors.white.primary};
    }
  
  `}

`

export const InputIcon = styled.button.attrs(() => ({
  className: 'input-group-text'
}))`
  ${({theme}) => css`
    background-color: transparent;
    position: absolute;
    right: 0;
    border: none;
    height: 100%;
    z-index: 9;
    :focus-visible, :focus {
        outline: none;
    }
  `}
`
