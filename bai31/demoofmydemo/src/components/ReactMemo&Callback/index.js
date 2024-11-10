import React, { useCallback, useState } from 'react';
import Box from './box';

function ReactMemo(props) {
    const [numberClick, setNumberClick] = useState(0)

    const handleClick = useCallback(() => {
        setNumberClick(numberClick => numberClick + 1)
    }, [])

    const handleReset = useCallback(() => {
        setNumberClick(0)
    }, [])

    return (
        <>
            <Box onClick={handleClick} onReset={handleReset} />
            <div>Số lần click: {numberClick} </div>
        </>
    );
}

export default ReactMemo;