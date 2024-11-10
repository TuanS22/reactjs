import React from 'react';
import { useRoutes } from 'react-router-dom';
import { router } from '../../router';

function RouterAll(props) {
    const element = useRoutes(router)

    return (
        <>
            {element}
        </>
    );
}

export default RouterAll;