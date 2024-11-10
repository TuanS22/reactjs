import React, { memo } from 'react';

function Box(props) {
    const { onClick, onReset } = props

    const handleClick = () => {
        onClick()
    }

    const handleReset = () => {
        onReset()
    }

    console.log("Hi!")

    return (
        <div>
            <button onClick={handleClick}>Count</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default memo(Box);