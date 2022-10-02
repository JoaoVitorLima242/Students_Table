import Modal from ".."
import Button from "../../Button"

import { ButtonsFlex, ModalContent } from "./styles"

const ConfirmDeleteModal = ({isOpen, modalHandler}) => {
    return (
        <Modal
            isOpen={isOpen}
            modalHandler={modalHandler}
            width={500}
        >
            <ModalContent>
                <h3 className='text-center'>Você tem certeza que gostaria de deletar esse estudante?</h3>
                <ButtonsFlex>
                    <Button color="red">Cancelar</Button>
                    <Button color="green">Confirmar</Button>
                </ButtonsFlex>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmDeleteModal