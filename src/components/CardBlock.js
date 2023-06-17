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

const CardBlock = (props) => {
    return (
        <div style={styles.block}>
            {props.children}
        </div>
    );
}

CardBlock.propTypes = {
    children: node
}

export default CardBlock;