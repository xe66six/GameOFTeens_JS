import {string} from "prop-types";
import {Link} from "react-router-dom";
import {ThemeColors} from "../constants/colors";
import CoolButton from "./CoolButton";
import {useEffect, useState} from "react";

const styles = {
    "container": {
        background: ThemeColors.light.main + 'C0',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '70px',
        position: 'fixed',
        top: 0,
        zIndex: 100
    },

    "adaptive": {
        padding: '0 10px 0 10px',
        justifyContent: 'space-between',
    },

    "itemContainer": {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',

    },

    "sticky": {
        position: 'fixed',
        top: 0
    },

    "logo": {
        display: 'flex',
        flexWrap: 'flex-start',
    },

    "header": {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
    },

    "links": {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '20px',
    },

    "link": {
        textDecoration: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        color: ThemeColors.light.foreground
    },

    "active": {
        color: ThemeColors.light.accent
    },

    "iconButton": {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        width: '32px',
        height: '32px',
        padding: '5px',
    }
}

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
    useEffect(() => {
        window.matchMedia("(max-width: 700px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const linkItems = links.map(item => (
        <Link to={item.path} style={{...styles.link, ...(props.active === item.path && styles.active)}}>{item.label}</Link>
    ));
    return (
        <header>
            <div style={styles.container}>
                <div style={{...styles.itemContainer, ...(matches && styles.adaptive)}}>
                    <div style={styles.logo}>
                        <p style={styles.header}>
                            GolTeens Lab
                        </p>
                    </div>
                    { matches ? (
                        <div style={styles.links}>
                            <button style={styles.iconButton}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="32" height="32" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 6l16 0"/>
                                    <path d="M4 12l16 0"/>
                                    <path d="M4 18l16 0"/>
                                </svg>
                            </button>
                        </div>

                    ) : (
                        <>
                            <div style={styles.links}>
                                {linkItems}
                            </div>
                            <div style={styles.links}>
                                <CoolButton>Додати стартап</CoolButton>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

MainHeader.propTypes = {
    active: string,
}

export default MainHeader