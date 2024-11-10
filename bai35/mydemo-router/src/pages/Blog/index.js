import React from 'react';
import { Outlet } from 'react-router-dom';

function Blog(props) {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Blog;