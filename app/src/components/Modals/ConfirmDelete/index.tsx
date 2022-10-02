import Modal from ".."
import Button from "../../Button"

import { ButtonsFlex, ModalContent } from "./styles"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
}

const ConfirmDeleteModal = ({isOpen, onClose, onConfirm}: ModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            modalHandler={onClose}
            width={500}
        >
            <ModalContent>
                <h3 className='text-center'>Você tem certeza que gostaria de deletar esse estudante?</h3>
                <ButtonsFlex>
                    <Button color="red" onClick={onClose}>Cancelar</Button>
                    <Button color="green" onClick={onConfirm}>Confirmar</Button>
                </ButtonsFlex>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmDeleteModal