import {Outlet} from "react-router-dom";
import StartupCard from "../components/StartupCard";

const Layout = () => {
    return (
        <>
            <StartupCard title={'hello, world!'} author={'vasyl'}/>
            <Outlet/>
        </>
    );
}

export default Layout;