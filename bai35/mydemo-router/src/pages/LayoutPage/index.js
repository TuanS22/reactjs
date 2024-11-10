import React from 'react';
import './layout.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';

function LayoutPage(props) {
    return (
        <>
            <div className='layout'>
                <div className='layout__logo'>Logo</div>
                <div className='layout__menu'>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'blog'}>Blog</NavLink>
                            <ul className='sub__menu'>
                                <li>
                                    <Link to={'blog/new'}>New</Link>
                                </li>
                                <li>
                                    <Link to={'blog/product'}>Product</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={'contact'}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={'about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'info-user'}>Info</NavLink>
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