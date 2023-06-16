import {Outlet, useLocation} from "react-router-dom";
import MainHeader from "../components/MainHeader";

const Layout = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <MainHeader active={location.pathname}/>
            <Outlet/>
        </>
    );
}

export default Layout;