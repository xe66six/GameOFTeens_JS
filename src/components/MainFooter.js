
const styles = {
    "container": {
        width: '100%',
        padding: '20px 0 20px 0',
        borderTop: '1px solid #00000033',
    },
    "text": {
        fontSize: '18px',
        margin: '5px 0 5px 0',
        textAlign: 'center',
        justifyContent: 'center',
        opacity: 0.3,
    }
};

const Footer = () => {
    return (
        <footer className="footer">
            <div style={styles.container}>
                <p style={styles.text}>Усі права захищені</p>
                <p style={styles.text}>Powered by RIGHT SECTOR</p>
            </div>
        </footer>
    );
};

export default Footer;