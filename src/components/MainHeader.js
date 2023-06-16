import {string} from "prop-types";
import {Link} from "react-router-dom";
import {ThemeColors} from "../constants/colors";

const styles = {
    "container": {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
    },

    "link": {
        display: 'flex',
        flexWrap: 'center',
        textDecoration: 'none',
        margin: '20%',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '29px',
    },

    "active": {
        color: ThemeColors.light.accent
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
    path: 'events'
}]

const MainHeader = (props) => {
    const linkItems = links.map(item => (
        <Link to={item.path} styles={[styles.link,
            props.active === item.path & styles.active]}>{item.label}</Link>
    ));

    return (
        <header>
            <div style={styles.container}>
                <div className="header-logo">
                    <p className="header-logo-text">
                        GolTeens Lab
                    </p>
                </div>
                <div className="navbar">
                    {linkItems}
                </div>
                <div className="navbar-btn">
                    <a href="#">
                        <button className="true-navbar-btn">
                            Додати стартап
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
}

MainHeader.propTypes = {
    active: string,
}

export default MainHeader