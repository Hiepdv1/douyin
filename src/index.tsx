import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import AuthProvider from './components/authProvider'
import router from './routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <AuthProvider isSignedIn={false}>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)
