import Cart from "../pages/Cart";
import Home from "../pages/Home";
import LayoutPage from "../pages/LayoutPage";
import Product from "../pages/Products";
import Clothes from "../pages/Products/clothes";
import Laptop from "../pages/Products/laptop";
import ProductAll from "../pages/Products/productAll";

export const router = [
    {
        element: <LayoutPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'product',
                element: <Product />,
                children: [
                    {
                        index: true,
                        element: <ProductAll />
                    },
                    {
                        path: '/product/laptop',
                        element: <Laptop />
                    },
                    {
                        path: '/product/clothes',
                        element: <Clothes />
                    }
                ]
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
]