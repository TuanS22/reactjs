import React, { useState } from 'react';
import "./Modal.scss";

function Modal(props) {
    // let isViewMore = false
    const [ popup, setPopup ] = useState(true)
    const handleViewMore = (e) => {
        setPopup(true)
    }
    const handleClose = () => {
        setPopup(false)
    }
    
    return (
        <>
            <div className='view--more'>
                <button onClick={handleViewMore}>View more</button>
            </div>
            {popup && (
                <div className='popup--content'>
                    <div className='popup--close'>
                        <button onClick={handleClose}>X</button>
                    </div>
                    <div className='content'>Nội dung...</div>
                </div>
            )}
        </>
    );
}

export default Modal;