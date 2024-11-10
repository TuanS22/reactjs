import React from 'react';
import "./layout.scss";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LayoutPage(props) {
    const cart = useSelector(state => state.cartReducers)

    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)
    // console.log(totalQuantity)

    return (
        <>
            <div className='layout'>
                <div className='layout__logo'>
                    <Link to={'/'}>
                        <img src='https://cdn.glitch.global/207d6553-e126-40c7-9ab6-2735d92584ec/Logo_Tuan_rvbg.png?v=1726154450165' alt='Logo' width={100} height={100} />
                    </Link>
                </div>
                <div className='layout__menu'>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to={'product'}>Product</NavLink>
                            <ul className='sub__menu'>
                                <li> <NavLink to={'product/smartphone'} > Smartphone </NavLink> </li>
                                <li> <NavLink to={'product/laptop'} > Laptop </NavLink> </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={'cart'}>Cart <span>{totalQuantity}</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='layout__main'>
                <Outlet />
            </div>
            <div className='layout__footer'>
                Footer
            </div>
        </>
    );
}

export default LayoutPage;