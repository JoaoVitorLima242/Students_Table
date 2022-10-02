import styled, { css } from 'styled-components'
import { ModalWrapperProps } from './types'

const wrapperModifiers = {
  isOpen: () => css`
    display: block;
    opacity: 1;
  `
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'modal'
}))<ModalWrapperProps>`
    ${({ theme, isOpen, width }) => css`
        ${isOpen && wrapperModifiers.isOpen()};

        --bs-modal-width: ${!!width && `${width}px`};
    `}
`

export const Overlay = styled.div`
  position: absolute;
  background-color: #00000035;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`

export const ModalDialog = styled.div.attrs(() => ({
  className: 'modal-dialog'
}))`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 80px 0;
`

export const ModalContent = styled.div.attrs(() => ({
  className: 'modal-content'
}))`
  ${() => css`
      background: #FFFFFF;
      border-radius: 16px;
      border: none;
      padding: 18px 40px 30px;
      width: 100%;
      position: relative;
      z-index: 999;
  `}
`

export const ModalHeader = styled.div.attrs(() => ({
  className: 'modal-header'
}))`
    border: none
`

export const CloseButton = styled.button`
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background-color: transparent;
    margin-left: auto;
    opacity: 0.8;

    :hover {
      opacity: 0.6;
      transition: ease-in-out 50ms all;
    }
`
