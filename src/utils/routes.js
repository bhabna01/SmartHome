import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Root from '../components/Root'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import { productAndCartData } from '../loaders/getCart&Product'

// const myFunc = () => fetch('products.json')
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: productAndCartData,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
        ]
    },

])
export default router