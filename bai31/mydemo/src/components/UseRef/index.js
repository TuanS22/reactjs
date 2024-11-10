import React, { useRef, useState } from 'react';

// đến số lần onChange nhưng k đc render lại component sử dụng useRef()
function UseRef(props) {
    const [inputData, setInputData] = useState("")
    const counterRef = useRef(0)

    const handleOnChange = (e) => {
        setInputData(e.target.value)
        counterRef.current = counterRef.current + 1
    }

    console.log(counterRef.current)
    
    return (
        <>
            <input value={inputData} onChange={handleOnChange} />
        </>
    );
}

export default UseRef;