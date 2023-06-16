import {string} from "prop-types";
import Image from "../img/rect.png";

const styles = {
    "card": {
        width: '100%'
    },
    "image": {
        width: '470px',
        height: '370px'
    },
    "label": {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '29px',
        color: '#000000'
    },
    "author": {
        marginTop: '-1%',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '28px',
        lineHeight: '24px',
        color: '#3787FF'
    }
}

const StartupCard = (props) => {
    return (
        <div style={styles.card}>
            <img style={styles.image} src={Image} alt='Startup'></img>
            <p style={styles.label}>{props.title}</p>
            <p style={styles.author}>{props.author}</p>
        </div>
    );
}

StartupCard.propTypes = {
    title: string,
    author: string
}

export default StartupCard