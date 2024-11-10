import React, { useMemo, useState } from 'react';
import { pow } from '../Helpers/pow';

function UseMemo(props) {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count => count + 1)
    }

    const resultPow = useMemo(() => {
        pow()
    }, [])

    return (
        <>
            <div>
                <button onClick={handleCount}>Count</button>
                <p>Số lần click: {count}</p>
            </div>
            <div>
                <p>{resultPow}</p>
            </div>
        </>
    );
}

export default UseMemo;