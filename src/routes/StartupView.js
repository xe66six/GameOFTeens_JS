import StartupCard from "../components/StartupCard";
import CardBlock from "../components/CardBlock";
import {StartupList} from "../constants/startups"
import '../components/StartupCard.css'
import CoolButton from "../components/CoolButton";
import {ThemeColors} from "../constants/colors";
import {useLocation} from "react-router-dom";
import "./StartupView.css";

const StartupView = () => {
    const location = useLocation();
    const item = StartupList.find(i => i.id === location.pathname.split('/')[2]);
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="total-info">
                        <img src={require(`../img/${item.image}`)} alt="Startup" className="total-info__image"/>
                            <div className="total-info__text">
                                <h1 className="total-info__title">{item.title}</h1>
                                <p className="total-info__author">{item.author}</p>
                                <p className="total-info__contacts">{item.contact}</p>
                                <CoolButton>Підтримати</CoolButton>
                            </div>
                    </div>
                    <h2 className="description__title">Опис</h2>
                    <p className="startup__description">{item.description}</p>
                    <CoolButton>Підтримати</CoolButton>
                </div>
            </div>
        </main>
    );
}

export default StartupView;