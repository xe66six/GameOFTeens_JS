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
       

<body class="body">

    <section class="startap">
        <div class="startap-container">
        <p class="startap-headline">
            Стартапи
        </p>
       <div class="cart-block"> 
        <div class="startap-cart">
            <img class="startap-cart-img" src="./img/Rectangle 8.png"></img>
            <p class="startap-cart-text-name na">Назва</p>
            <p class="startap-cart-text-creator">Автор</p>
        </div>
        <div class="startap-cart">
            <img class="startap-cart-img" src="./img/Rectangle 8.png"></img>
            <p class="startap-cart-text-name">Назва</p>
            <p class="startap-cart-text-creator">Автор</p>
        </div>
        <div class="startap-cart">
            <img class="startap-cart-img" src="./img/Rectangle 8.png"></img>
            <p class="startap-cart-text-name">Назва</p>
            <p class="startap-cart-text-creator">Автор</p>
        </div>

    </div>
    <div class="cart-block1">
        <div class="startap-cart">
            <img class="startap-cart-img" src="./img/Rectangle 8.png"></img>
            <p class="startap-cart-text-name">Назва</p>
            <p class="startap-cart-text-creator">Автор</p>
        </div>
        <div class="startap-cart">
            <img class="startap-cart-img" src="./img/Rectangle 8.png"></img>
            <p class="startap-cart-text-name">Назва</p>
            <p class="startap-cart-text-creator">Автор</p>
        </div>
    </div>
    <div class="btn-Dodate-Startup"></div>
    <a href="#">
        <button class="true-navbar-btn">
            Додати стартап
        </button>
    </a>
    </div>
    <div class="div-some-text">
        <div class="true-div-some-text">
        <p class="some-text">якісь текст</p>
    </div>
    </div>
    <div class="div-true-navbar-btn-under-some-text">
    <a  href="#">
        <button class="true-navbar-btn-under-some-text">
            Додати стартап
        </button>
    </a>
    
    
    
    
    
    
   {/* <img style={styles.image} src={require(`../img/${props.image}`)}
                 alt='Startup'></img>
            <p style={styles.label}>{props.title}</p>
            <p style={styles.author}>{props.author}</p>


    */}


</div>
    </section>
    <footer class="footer">
        <div class="footer-container">
            <p class="footer-text">Усі права захищені</p>
            <p class="footer-text">Powered by RIGHT SECTOR</p>
        </div>
    </footer>
    <script src="./index.js"></script>
</body>









    );
}

StartupCard.propTypes = {
    title: string,
    author: string,
    image: string
}

export default StartupCard