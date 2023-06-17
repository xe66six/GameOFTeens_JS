import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {StartupList} from "../constants/startups";
import SwiperCore, {Autoplay} from "swiper";
import {Link} from "react-router-dom";
import EventCard from "../components/EventCard";
import {EventList} from "./Events";
import {AboutUsList} from "../constants/aboutus";
import "./General.css";

const General = () => {
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