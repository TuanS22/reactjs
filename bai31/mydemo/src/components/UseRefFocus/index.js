import React, { useEffect, useRef } from 'react';

function UserRefFocus(props) {
    const counterRef = useRef()

    useEffect(() => {
        console.log(counterRef.current)
        counterRef.current.focus()
    }, [])

    const handleChange = (e) => {
        // console.log(e)
    }

    return (
        <>
            <input ref={counterRef} onChange={handleChange} />
        </>
    );
}

export default UserRefFocus;