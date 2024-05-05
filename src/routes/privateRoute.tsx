import { useNavigate } from 'react-router-dom'
import { IRouteProps } from '../interfaces'
import { useEffect } from 'react'

function PrivateRoute(props: IRouteProps) {
    const { Component, layout: Layout } = props
    const navigate = useNavigate()
    const token = null

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token, navigate])

    if (!Layout) {
        return <Component />
    }

    return (
        <Layout>
            <Component />
        </Layout>
    )
}

export default PrivateRoute
