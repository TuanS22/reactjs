import React, { useEffect, useRef, useState } from 'react';

function UseRef(props) {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const countRef = useRef(0)
    const input = useRef("")
    

    useEffect(() => {
        input.current.focus()
    })  

    const handleChange = (e) => {
        countRef.current = countRef.current + 1
        setCount(countRef.current)
        setInputValue(e.target.value)
    }

    return (
        <>
            <input ref={input} value={inputValue} onChange={handleChange} />
            <div>Số lần nhập vào form: {count}</div>
        </>
    );
}

export default UseRef;