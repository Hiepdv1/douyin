import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

function MainLayout() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="ContentContainer">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
