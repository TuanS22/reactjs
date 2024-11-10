import React from 'react';
import Header from '../Header';
import { createContext } from 'react';
export const MenuContext = createContext();

function Layout(props) {
    const menus = [
        "Trang chủ",
        "Tin tức",
        "Liên hệ"
    ]

    return (
        <>
            <MenuContext.Provider value={menus}>
                <Header />
                <div>Main</div>
                <div>Footer</div>
            </MenuContext.Provider>
        </>
    );
}

export default Layout;