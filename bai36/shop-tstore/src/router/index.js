import Cart from "../page/Cart";
import Home from "../page/Home";
import LayoutPage from "../page/LayoutPage";
import Products from "../page/Products";
import Laptop from "../page/Products/laptop";
import ProductAll from "../page/Products/productAll";
import Smartphone from "../page/Products/smartphone";

export const router = [
    {
        element: <LayoutPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product',
                element: <Products />,
                children: [
                    {
                        index: true,
                        element: <ProductAll />
                    },
                    {
                        path: '/product/smartphone',
                        element: <Smartphone />,
                    },
                    {
                        path: '/product/laptop',
                        element: <Laptop />,
                    }
                ]
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]