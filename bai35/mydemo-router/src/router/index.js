import About from "../pages/About"
import Blog from "../pages/Blog"
import Blogall from "../pages/Blog/blogall"
import BlogDetail from "../pages/Blog/detail"
import New from "../pages/Blog/new"
import Product from "../pages/Blog/product"
import Contact from "../pages/Contact"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import InfoUser from "../pages/InfoUser"
import LayoutPage from "../pages/LayoutPage"
import Login from "../pages/Login"
import PrivateRouter from "../pages/PrivateRoute"

export const router = [
    {
        element: <LayoutPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <Blogall />
                    },
                    {
                        path: 'new',
                        element: <New />
                    },
                    {
                        path: 'product',
                        element: <Product />
                    },
                    {
                        path: ':id',
                        element: <BlogDetail />
                    },
                ]
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: 'info-user',
                        element: <InfoUser />
                    }
                ]
            },
            {
                path: '*',
                element: <Error404 />
            }
        ]
    }
]

