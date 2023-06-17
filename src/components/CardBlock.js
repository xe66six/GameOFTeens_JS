import {node} from "prop-types";

const styles = {
    "block": {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        rowGap: '50px',
        columnGap: '50px',
    },
}

const StartupCard = (props) => {
    return (
        <div style={styles.block}>
            {props.children}
        </div>
    );
}

StartupCard.propTypes = {
    children: node
}

export default StartupCard