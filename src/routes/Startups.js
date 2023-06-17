import StartupCard from "../components/StartupCard";
import CardBlock from "../components/CardBlock";
import {StartupList} from "../constants/startups"
import '../components/StartupCard.css'
import {ThemeColors} from "../constants/colors";
import ModalButton from "../components/ModalButton";

const Startups = () => {
    const cards = StartupList.map(item => (
        <StartupCard title={item.title}
                     author={item.author}
                     image={item.image}
                     href={item.id}/>
    ))
    return (
            <section className="startap">
                <div className="startap-container">
                    <p className="startap-headline">
                        Стартапи
                    </p>
                    <CardBlock>
                        {cards}
                    </CardBlock>
                </div>
                <div className="div-some-text">
                    <center>
                        <div className="primary-card-text">
                            Створи свій стартап та почни приймати інвестиції зараз
                        </div>
                        <ModalButton background={ThemeColors.light.main}
                                    foreground={ThemeColors.light.accent}>Додати стартап</ModalButton>
                    </center>

                </div>
            </section>
    );
}

export default Startups;