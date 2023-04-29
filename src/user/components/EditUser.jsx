import { Modal, Button } from 'react-bootstrap';
import { FormUser } from './FormUser';


export const EditUser = ({ isOpenModal, isCloseModal, userEdit }) => {

    if (!isOpenModal) return null;

    return (
        <>
            <Modal show={isOpenModal} onHide={isCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal para editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUser userProp={ userEdit }
                        titleButton={ 'Actualiza el usuario' }
                        option={ 2 }
                    >

                    </FormUser>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={isCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
