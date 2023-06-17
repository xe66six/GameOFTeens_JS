import {ThemeColors} from "../constants/colors";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {StartupList} from "../constants/startups";
import StartupCard from "../components/StartupCard";
import SwiperCore, {Autoplay} from "swiper";
import {Link} from "react-router-dom";
import EventCard from "../components/EventCard";
import {EventList} from "./Events";
import {AboutUsList} from "../constants/aboutus";
import "./General.css";

const styles = () => ({
    "main": {
        display: 'block'
    },
    "container": {
        maxWidth: '1440px',
        margin: '0 auto'
    },
    "hero__content": {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    "hero__title": {
        margin: 0,
        fontSize: '96px',
    },
    "hero__title_color": {
        background: 'linear-gradient(to right, #3787FF, #8235f4)',
        backgroundClip: 'text',
        //backgroundImage: 'linear-gradient(#3787FF, #8235f4)',
        color: 'transparent'
        //fontFamily: 'Ubuntu, Roboto, sans-serif'
    },
    "hero__title_decoration": {
        textDecoration: 'underline'
    },
    "startups": {
        backgroundColor: '#EDEDED',
        padding: '40px 0'
    },
    "startups__title": {
        fontSize: '75px',
        textAlign: 'center',
        marginBottom: '40px',
    },
    "startups__slider": {
        textAlign: 'center'
    },
    startups__image: (img) => ({
        backgroundImage: `url(${require(`../img/${img}`)})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        width: '600px',
        height: '400px',
    }),

    "news": {
        padding: '40px 0'
    },
    "news__btn": {
        color: '#3787FF',
        textDecoration: 'none',
        display: 'block',
        textAlign: 'right',
        fontSize: '24px',
        marginBottom: '15px',
        "&:hover": {
            textDecoration: "underline"
        }
    },
    "news__flex": {
        display: 'flex',
        justifyContent: 'spaceBetween',
        flexWrap: 'wrap'
    },
    "news__card": {
        padding: '25px 15px',
        textAlign: 'center',
        backgroundColor: '#EDEDED'
    },
    "about_us": {
        backgroundColor: '#EDEDED',
        padding: '40px 0',
    },
    "about_us__title": {
        fontSize: '48px',
        textAlign: 'center',
        marginBottom: '25px',
    },
    "about_us__flex": {
        display: 'flex',
        margin: '0 -10px',
    },
    "about_us__card": {
        padding: '20px 15px 80px 15px',
        backgroundColor: '#fff',
        margin: '0 10px'
    },
    "about_us__card_title": {
        fontSize: '22px',
        marginBottom: '20px',
    },
    "about_us__card_post": {
        fontSize: '20px',
        marginBottom: '35px',
    },
});

const General = (props) => {
    const useStyles = styles();
    const startupSlides = StartupList.slice(0, 3).map(item => (
        <SwiperSlide>
            <div>
                <a href={`/startups/${item.id}`}>
                    <img src={require(`../img/${item.image}`)}
                         alt='Startup'/>
                </a>
            </div>
        </SwiperSlide>
    ));
    const eventSlides = EventList.slice(0, 2).map(item => (
        <EventCard title={item.title}
                   author={item.description}
                   image={item.image}
                   tag={item.tag}
                   tagColor={item.color}
                   date={item.date}/>
    ));
    const aboutSlides = AboutUsList.map(item => {
        return (
            <div className="about-us__card">
                <h5 className="about-us__card-title">{item.name}</h5>
                <p className="about-us__card-post">{item.job}</p>
                <p className="about-us__card-description">{item.about}</p>
            </div>
        )
    });
    SwiperCore.use([Autoplay]);
    return (
        <main className="general__main">
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            <span className="hero__title-color">GoITeens Lab</span> - шлях
                            розвитку <span className="hero__title-decoration">твого</span> стартапу
                        </h1>
                    </div>
                </div>
            </section>

            <section className="startups">
                <div className="container">
                    <div className="startups__content">
                        <h2 className="startups__title">Стартапи</h2>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides
                            className="startups__slider"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            freeMode={true}
                            loop={true}
                            speed={1000}
                        >
                            {startupSlides}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="container">
                    <div className="news__content">
                        <Link to="/events" class="news__btn">Усі події</Link>
                        <div className="news__flex">
                            {eventSlides}
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <div className="container">
                    <div className="about-us__content">
                        <h4 className="about-us__title">Про нас</h4>
                        <div className="about-us__flex">
                            {aboutSlides}
                        </div>
                    </div>
                </div>
            </section>
            {/*

            */}
        </main>
    );
}

export default General;