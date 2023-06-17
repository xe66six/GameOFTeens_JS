import StartupCard from "../components/StartupCard";
import CardBlock from "../components/CardBlock";
import {StartupList} from "../constants/startups"
import '../components/StartupCard.css'

const Startups = () => {
    const cards = StartupList.map(item => (
        <StartupCard title={item.title.length > 25 ?
            item.title.substring(0, 25) + "..." :
            item.title}
                     author={item.author}
                     image={item.image}/>
    ))
    return (
        <body className="body">

        <section className="startap">
            <div className="startap-container">
                <p className="startap-headline">
                    Стартапи
                </p>
                <CardBlock>
                    {cards}
                </CardBlock>
                <div className="btn-Dodate-Startup"></div>
                <a href="#">
                    <button className="true-navbar-btn">
                        Додати стартап
                    </button>
                </a>
            </div>
            <div className="div-some-text">
                <div className="true-div-some-text">
                    <p className="some-text">якісь текст</p>
                </div>
            </div>
            <div className="div-true-navbar-btn-under-some-text">
                <a href="#">
                    <button className="true-navbar-btn-under-some-text">
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
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">Усі права захищені</p>
                <p className="footer-text">Powered by RIGHT SECTOR</p>
            </div>
        </footer>
        </body>
    );
}

export default Startups;