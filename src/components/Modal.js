import React from 'react';
import ReactDOM from 'react-dom';
const Modal = (props) => {
    return ReactDOM.createPortal(
        <div
            onClick={() => {
                props.onDismiss();
            }}
            className='ui dimmer modals visible active'
        >
            <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active' />
        </div>,
        document.querySelector('#modal')
    );
};
export default Modal;
