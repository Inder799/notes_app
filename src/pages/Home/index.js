import { Navbar } from "../../components/Navbar"
import { Fragment } from "react/jsx-runtime"
import { SideBar } from "../../components/Sidebar"

export const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <SideBar />
            </main>
        </Fragment>
    )
}