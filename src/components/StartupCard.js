import {string} from "prop-types";

const styles = {
    "image": {
        width: '350px',
        height: '350px',
        objectFit: 'cover',
        borderRadius: '10px'
    },
    "label": {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '20px',
        color: '#000000'
    },
    "author": {
        marginTop: '-1%',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '16px',
        color: '#3787FF'
    }
}

const StartupCard = (props) => {
    return (
        <div>
            <img style={styles.image} src={require(`../img/${props.image}`)}
                 alt='Startup'></img>
            <p style={styles.label}>{props.title}</p>
            <p style={styles.author}>{props.author}</p>
        </div>
    );
}

StartupCard.propTypes = {
    title: string,
    author: string,
    image: string
}

export default StartupCard