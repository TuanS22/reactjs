import React from 'react';

function Content(props) {
    // Destructuring
    const { text, number, active } = props
    
    return (
        <>
            <div className={'box ' + (active ? "box--active" : "")}>
                {text} - {number}
            </div>
        </>
    );
}

export default Content;