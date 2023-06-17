import { string } from "prop-types";
import './StartupCard.css'

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
        <div class="startap-cart">
            <img class="startap-cart-img" alt='Startup' src={require(`../img/${props.image}`)}></img>
            <p class="startap-cart-text-name na">{props.title}</p>
            <p class="startap-cart-text-creator">{props.author}</p>
        </div>
    );
}

StartupCard.propTypes = {
    title: string,
    author: string,
    image: string
}

export default StartupCard