import { IRouteProps } from '../interfaces'

function AnonymousRoute(props: IRouteProps) {
    const { Component, layout: Layout } = props

    if (!Layout) {
        return <Component />
    }

    return (
        <Layout>
            <Component />
        </Layout>
    )
}

export default AnonymousRoute
