import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../Layout';

function Menu(props) {
    const dataMenus = useContext(MenuContext)
    return (
        <>
            <ul>
                {dataMenus.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default Menu;