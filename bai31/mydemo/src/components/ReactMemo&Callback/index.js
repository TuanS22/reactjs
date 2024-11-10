import React, { useCallback, useState } from 'react';
import Box from './box';

function ReactMemoCallback(props) {
    const [clickMe, setClickMe] = useState(0)

    const handleClick = useCallback(() => {
        setClickMe(clickMe => clickMe + 1)
    }, [])

    const handleReset = useCallback(() => {
        setClickMe(0)
    }, [])

    console.log(clickMe)

    return (
        <>
            <Box onClick={handleClick} onReset={handleReset} />
            <div>Số lần click: {clickMe}</div>
        </>
    );
}

export default ReactMemoCallback;