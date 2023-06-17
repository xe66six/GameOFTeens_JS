import { string } from "prop-types";
import './StartupCard.css'
import {Link} from "react-router-dom";

const StartupCard = (props) => {
    return (
        <Link to={props.href} className='startup__card'>
            <div className="startap-cart">
                <img className="startap-cart-img" alt='Startup' src={require(`../img/${props.image}`)}></img>
                <p className="startap-cart-text-name">{props.title}</p>
                <p className="startap-cart-text-creator">{props.author}</p>
            </div>
        </Link>
    );
}

StartupCard.propTypes = {
    title: string,
    author: string,
    image: string,
    href: string
}

export default StartupCard