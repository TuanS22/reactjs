import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { down, reset, up } from '../../actions/counter';

function Counter(props) {
    const count = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h2>Kết quả: {count}</h2>
            </div>
            <button onClick={() => dispatch(up(6))}>Tăng 6</button>
            <button onClick={() => dispatch(down(2))}>Giảm 2</button>
            <button onClick={() => dispatch(reset())}>Đặt lại</button>
        </>
    );
}

export default Counter;