import React, { ReactNode } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

interface IProps {
    title: string;
    className?: string;
    children: ReactNode;
    showSaveButton?: boolean;
    openModalRenderer: (open: () => void) => ReactNode;
}

export const SimpleModal: React.FC<IProps> = (props: IProps) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            {props.openModalRenderer(openModal)}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={props.title}
            >
                {props.children}
                {
                    props.showSaveButton &&
                    <button className="button" onClick={closeModal}>Save</button>
                }
            </Modal>
        </>
    );
};

export const setUpModal = () => {
    Modal.setAppElement('#quill-modal')
}