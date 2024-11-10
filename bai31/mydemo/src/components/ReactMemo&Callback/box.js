import React, { memo } from 'react';

function Box(props) {
    console.log("Hi!")
    const { onClick, onReset } = props

    const handleClick = () => {
        onClick()
    }

    const handleReset = () => {
        onReset()
    }

    return (
        <div>
            <button onClick={handleClick}>Count</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default memo(Box);