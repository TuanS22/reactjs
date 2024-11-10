import { useRoutes } from 'react-router-dom';
import { router } from '../router';

function AllRouter(props) {
    const element = useRoutes(router)
    return (
        <>
            {element}
        </>
    );
}

export default AllRouter;