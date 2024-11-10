import React from 'react';
import { down, up } from '../../actions/counter';
import { useDispatch, useSelector } from 'react-redux';

function Counter2(props) {
    const count2 = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Kết quả: {count2}</h2>
            <button onClick={() => dispatch(up(3))}>Tăng 3</button>
            <button onClick={() => dispatch(down(1))}>Giảm 1</button>
        </>
    );
}

export default Counter2;