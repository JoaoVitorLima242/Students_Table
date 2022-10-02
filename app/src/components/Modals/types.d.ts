import { ReactNode } from 'react'

export type ModalProps = {
  isOpen: boolean;
  children: ReactNode
  width?: number
  modalHandler: () => void
}

export type ModalWrapperProps = {
  isOpen: boolean
  width?: number
}
