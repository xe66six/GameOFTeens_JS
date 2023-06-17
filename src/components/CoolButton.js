import {ThemeColors} from "../constants/colors";
import {node, string} from "prop-types";

const styles = {
    "button": {
        height: '40px',
        background: '#3787FF',
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
        color: ThemeColors.light.main,
    }
}

const CoolButton = (props) => {
    return (
        <button style={styles.button}>
            {props.children}
        </button>
    );
};

CoolButton.propTypes = {
    children: node,
}
export default CoolButton;