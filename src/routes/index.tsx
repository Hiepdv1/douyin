import Home from '../pages/home'
import Recommend from '../pages/recommend'

import { createBrowserRouter, RouteObject } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import NotFound from '../pages/404'
import Profile from '../pages/profile'
import ProtectedRouted from '../components/protectedRoute'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true,
            },
            {
                path: '/recommend',
                element: <Recommend />,
                index: true,
            },
        ],
    },
    {
        path: '/404',
        element: <NotFound />,
    },
    // private routes
    {
        element: <ProtectedRouted />,
        children: [{ path: '/profile', element: <Profile />, index: true }],
    },
]

const router = createBrowserRouter(routes)

export default router
