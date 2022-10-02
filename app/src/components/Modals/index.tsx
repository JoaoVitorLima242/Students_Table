import {MdOutlineClose} from 'react-icons/md'

import * as S from './styles'
import { ModalProps } from './types'

const Modal = ({ children, isOpen, width, modalHandler }: ModalProps) => {
  return (
    <S.Wrapper
      isOpen={isOpen}
      width={width}
    >
      <S.Overlay
        onClick={modalHandler}
      />
      <S.ModalDialog>
        <S.ModalContent>
          <S.ModalHeader>
            <S.CloseButton onClick={modalHandler}><MdOutlineClose /></S.CloseButton>
          </S.ModalHeader>
          {children}
        </S.ModalContent>
      </S.ModalDialog>
    </S.Wrapper>
  )
}

export default Modal
