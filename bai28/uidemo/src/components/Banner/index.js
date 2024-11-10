import React from 'react';
import logo from '../img/Y.jpg'


function Banner(props) {
    return (
        <div className='banner'>
            <img className='img-banner' src={logo} />
        </div>
    );
}

export default Banner;