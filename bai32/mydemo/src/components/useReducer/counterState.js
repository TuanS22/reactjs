import React, { useState } from 'react';

function CounterState(props) {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h4>Kết quả: {count}</h4>
        </>
    );
}

export default CounterState;