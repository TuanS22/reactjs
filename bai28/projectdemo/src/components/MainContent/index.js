import React from 'react';

function MainContent(props) {
    const handleClick = (e) => {
        console.log(e.target)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleFocus = (e) => {

        e.target.classList.add("input--active")
        console.log(e.target)
    }

    const handleBlur = (e) => {
        e.target.classList.remove("input--active")
        console.log(e.target)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }

    return (
        <>
            <div className='box'>
                <form onSubmit={handleSubmit}>
                    <div>MainContent</div>
                    <input className='active' onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} type='text' />
                    <button onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default MainContent;