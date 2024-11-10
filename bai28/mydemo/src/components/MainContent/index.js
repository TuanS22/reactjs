import React from 'react';
import { FaThreads } from "react-icons/fa6";
import { FcDeleteDatabase } from "react-icons/fc";

function MainContent(props) {
    // onClick 
    const handleClick = (e) => {
        console.log(e.target)
    }

    //onChange
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    // onFocus
    const handleFocus = (e) => {
        e.target.classList.add("input--active");
    }

    // onBlur
    const handleBlur = (e) => {
        e.target.classList.remove("input--active");
    }

    // onSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }

    return (
        <>
            <div className='box'>
                <FaThreads />
                <FcDeleteDatabase />
                <br />
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                    <button onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default MainContent;