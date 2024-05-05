import { useEffect } from 'react'
import { useAuth } from '../authProvider'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectedRouted() {
    const user = useAuth()
    const navigator = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigator('/', { replace: true })
        }
    }, [navigator, user])

    return <Outlet />
}

export default ProtectedRouted
