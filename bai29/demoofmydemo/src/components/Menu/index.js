import React from 'react';

function Menu(props) {
    const arrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ",
    ];

    console.log(arrayMenu)

    return (
        <>
            <div style={{display: "flex"}}>
                {arrayMenu.map((item, idex) => {
                    return (
                        <div key={idex}>{item}</div>
                    )
                })}
            </div>
        </>
    );
}

export default Menu;