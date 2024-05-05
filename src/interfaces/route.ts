import { ComponentType, ReactNode } from 'react'

interface IRouteProps {
    Component: ComponentType
    layout: ComponentType<{ children?: ReactNode }> | null
}

export type { IRouteProps }
