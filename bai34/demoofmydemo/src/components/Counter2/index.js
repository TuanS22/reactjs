import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { down, up } from "../../actions/counter";

function Counter2(props) {
    const count2 = useSelector(state => state.counterReducers)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h2>Kết quả: {count2}</h2>
            </div>
            <div>
                <button onClick={() => dispatch(up(3))}>Tăng 3</button>
                <button onClick={() => dispatch(down(5))}>Giảm 5</button>
            </div>
        </>
    );
}

export default Counter2;