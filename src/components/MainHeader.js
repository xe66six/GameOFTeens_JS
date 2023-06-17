import {string} from "prop-types";
import {Link, useLocation} from "react-router-dom";
import CoolButton from "./CoolButton";
import {useEffect, useState} from "react";
import "./MainHeader.css";

const links = [{
    label: 'Головна',
    path: '/'
}, {
    label: 'Стартапи',
    path: '/startups'
}, {
    label: 'Події',
    path: '/events'
}]

const MainHeader = (props) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 700px)").matches
    );
    const [ burgerOpen, setBurgerOpen ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.matchMedia("(max-width: 700px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    useEffect(() => {
        setBurgerOpen(false);
    }, [location]);

    const linkItems = links.map(item => (
        <Link to={item.path}
              className={`header__link ${(burgerOpen ? 'header__link_big' : '')} ${(props.active === item.path ? 'header__active' : '')}`}>{item.label}</Link>
    ));
    return (
        <>
            { burgerOpen && (
                <div className='header__overlay'>
                    <div className='header__overlay_content'>
                        {linkItems}
                    </div>
                </div>
            )}

            <header>
                <div className='header__container'>
                    <div className={`header__itemContainer ${(matches ? 'header__adaptive' : '')}`}>
                        <div className='header__logo'>
                            <p className='header__h'>
                                GolTeens Lab
                            </p>
                        </div>
                        { matches ? (
                            <div className='header__links'>
                                <button className='header__iconButton' onClick={() => setBurgerOpen(!burgerOpen)}>
                                    { burgerOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="32" height="32" viewBox="0 0 32 32"
                                             strokeWidth="2" stroke="currentColor" fill="none"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M18 6l-12 12"></path>
                                            <path d="M6 6l12 12"></path>
                                        </svg>
                                    ) : (<svg xmlns="http://www.w3.org/2000/svg"
                                         width="32" height="32" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor"
                                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 6l16 0"/>
                                        <path d="M4 12l16 0"/>
                                        <path d="M4 18l16 0"/>
                                    </svg>)}
                                </button>
                            </div>

                        ) : (
                            <>
                                <div className='header__links'>
                                    {linkItems}
                                </div>
                                <div className='header__links'>
                                    <CoolButton>Додати стартап</CoolButton>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
}

MainHeader.propTypes = {
    active: string,
}

export default MainHeader