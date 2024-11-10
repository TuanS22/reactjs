import Gird from "../components/Gird";
import LayoutDefault from "../layout/layoutDefault";
import ChartJS from "../pages/chartjs";
import CreateCrush from "../pages/createCrush";
import Crush from "../pages/crush";
import ListCrush from "../pages/listCrush";

export const router = [
    {
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Gird />
            },
            {
                path: '/chart',
                element: <ChartJS />
            },
            {
                path: '/crush',
                element: <Crush />
            },
            {
                path: '/create-crush',
                element: <CreateCrush />
            },
            {
                path: '/list-crush',
                element: <ListCrush />
            }
        ]
    }
]