import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import { createContext } from 'react';
export const MenuContext = createContext();

function Layout(props) {
    const menus = [
        {
            id: 1,
            name: "Trang chủ"
        },
        {
            id: 2,
            name: "Tin tức"
        },
        {
            id: 3,
            name: "Tuyển dụng"
        },
    ]
    return (
        <>
            <MenuContext.Provider value={menus}>
                <Header />
                <Menu />
                <div>Main</div>
                <Footer />
            </MenuContext.Provider>
        </>
    );
}

export default Layout;