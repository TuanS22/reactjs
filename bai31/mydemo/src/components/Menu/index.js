import React, { useContext } from 'react';
import { MenuContext } from "../Layout"

function Menu(props) {
    const data = useContext(MenuContext)
    return (
        <>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default Menu;