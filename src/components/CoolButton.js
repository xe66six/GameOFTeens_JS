import {ThemeColors} from "../constants/colors";
import {node, string} from "prop-types";

const styles = (color, fore) => ({
    "button": {
        height: '40px',
        background: color,
        border: 'none',
        cursor: 'pointer',
        paddingLeft: '30px',
        paddingRight: '30px',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '18px',
        textAlign: 'center',
        color: fore,
        borderRadius: '5px'
    }
});

const CoolButton = (props) => {
    const useStyles = styles(props.background ?? '#3787FF',
        props.foreground ?? '#ffffff');
    return (
        <button style={useStyles.button}>
            {props.children}
        </button>
    );
};

CoolButton.propTypes = {
    children: node,
    background: string,
    foreground: string,
}

export default CoolButton;