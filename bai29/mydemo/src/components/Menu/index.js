import React from 'react';

function Menu(props) {
    const arrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ",
    ];
    
    return (
        <>
            <ul>
                {arrayMenu.map((item, index) => {
                    console.log(item, index);
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default Menu;