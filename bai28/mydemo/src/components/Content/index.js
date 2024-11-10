import React from 'react';

function Content(props) {

    return (
        <>
            <div className={"box " + (props.active ? "box--active" : "")}>
                {props.text} - {props.number}
            </div>
        </>
    );
}

export default Content;