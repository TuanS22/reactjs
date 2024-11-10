import React, { useState } from 'react';

function Modal(props) {
  const [viewMore, setViewMore] = useState(false)
  const handleClick = () => {
    setViewMore(true)
  }

  const handleClose = () => {
    setViewMore(false)
  }
  
  return (
    <>
      <div>
        <div>
          <button onClick={handleClick}>Click</button>
        </div>
        {viewMore && (
          <div>
            <button onClick={handleClose}>Close</button>
            <div>Nội dung...</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;