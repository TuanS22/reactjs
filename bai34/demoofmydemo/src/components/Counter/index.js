import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { down, reset, up } from "../../actions/counter";

function Counter(props) {
    const count = useSelector(state => state.counterReducers)
    console.log(count)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h2>Kết quả: {count}</h2>
            </div>
            <div>
                <button onClick={() => dispatch(up(6))}>Tăng 6</button>
                <button onClick={() => dispatch(down(5))}>Giảm 5</button>
                <button onClick={() => dispatch(reset())}>Đặt lại</button>
            </div>
        </>
    );
}

export default Counter;