import {Outlet, useLocation} from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./Layout.css";
import {useEffect, useState} from "react";

const Layout = () => {
    const [ loading, setLoading ] = useState(true);
    const [ disabled, setDisabled ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        setDisabled(false);

        setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
                setDisabled(true);
            }, 500);
        }, 1000);
    }, [setLoading, setDisabled, location]);

    return (
        <body>
            <MainHeader active={location.pathname}/>
            <div className={`loader ${loading ? 'loadingState' : 'hidden'} ${disabled ? 'disabled' : ''}`}>
                <div className='spinner'/>
            </div>

                <Outlet/>
            <MainFooter/>
        </body>
    );
}

export default Layout;