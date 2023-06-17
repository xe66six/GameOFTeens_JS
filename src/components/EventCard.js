import { string } from "prop-types";
import './StartupCard.css'

const styles = (img, badgeColor) => ({
    "card": {
        backgroundImage: `url(${require(`../img/${img}`)})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        position: 'relative',
        width: '650px',
        height: '350px',
        filter: 'drop-shadow(0 10px 0.75rem #00000010)'
    },

    "overlay": {
        height: 'inherit',
        borderRadius: '10px',
        backgroundImage: `linear-gradient(#ffffff00, #ffffff)`
    },

    "content": {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },

    "image": {
        width: '350px',
        height: '350px',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    "label": {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        color: '#000000',
        margin: '5px 0'
    },
    "author": {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        width: '80%',
        color: '#00000080',
        margin: '10px 0'
    },

    "date": {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        width: '80%',
        color: '#00000040',
        margin: '10px 0'
    },

    "badge": {
        backgroundImage:
            `linear-gradient(${badgeColor + "40"}, ${badgeColor + "20"})`,
        border: `1px solid ${badgeColor + "80"}`,
        color: badgeColor,
        padding: '4px 8px',
        margin: '0 15px',
        textAlign: 'center',
        borderRadius: '5px',
        fontWeight: 500,
        fontSize: '18px'
    }
});

const EventCard = (props) => {
    const useStyles = styles(props.image, props.tagColor)
    return (
        <div style={useStyles.card}>
            <div style={useStyles.overlay}>
                <div style={useStyles.content}>
                    <p style={useStyles.label}>
                        {props.title}
                        { props.tag && <span style={useStyles.badge}>{props.tag}</span> }
                    </p>
                    <p style={useStyles.author}>{props.author}</p>
                    <p style={useStyles.date}>{props.date}</p>
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    title: string,
    description: string,
    tag: string,
    tagColor: string,
    image: string,
    date: string
}

export default EventCard