import React, { useReducer } from 'react';

const reducer = (state, action) => {
    // action: Up, Down, Reset
    console.log(state, action)
    switch (action) {
        case "Up":
            return state + 1
        case "Down":
            return state - 1
        case "Reset":
            return 0
        default:
            return state
    }
}

function CounterReducer(props) {
    const [count, dispath] = useReducer(reducer, 0)
    
    return (
        <>
            <button onClick={() => dispath('Up')}>Up</button>
            <button onClick={() => dispath('Down')}>Down</button>
            <button onClick={() => dispath('Reset')}>Reset</button>
            <h4>Kết quả: {count}</h4>
        </>
    );
}

export default CounterReducer;