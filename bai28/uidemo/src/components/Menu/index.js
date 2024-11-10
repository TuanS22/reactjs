import React from 'react';
import logo from '../img/Logo_Tuan.png'

function Menu(props) {
    const handleClick = (e) => {
        console.log(e.target)
    }

    return (
        <div className='header'>
            <div className='flex w-1170'>
                <div>
                    <img className='img-menu' src={logo} width={50} height={50} />
                </div>
                <div>
                    <ul className='flex'>
                        <li onClick={handleClick}>About Me</li>
                        <li onClick={handleClick}>Products</li>
                        <li onClick={handleClick}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;