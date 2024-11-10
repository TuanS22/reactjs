import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { down, up } from "../../actions/counter"

function Counter2(props) {
    const count2 = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Kết quả: {count2}</h2>
            <button onClick={() => dispatch(up(3))}>Tăng 3</button>
            <button onClick={() => dispatch(down(5))}>Giảm 5</button>
        </>
    );
}

export default Counter2;