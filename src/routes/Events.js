import '../components/StartupCard.css'
import CardBlock from "../components/CardBlock";
import EventCard from "../components/EventCard";

export const EventList = [{
    title: 'Чашка кави, що зроблена з кави',
    tag: 'ТЕХНОЛОГІЇ',
    color: '#7c40ff',
    description: 'Український бренд Rekava продемонстрував, як можна виготовляти посуд з використаної кавової гущі.',
    date: '01.05.2023',
    image: 'events/Rekava.jpg',
}, {
    title: 'Дитяча казка: чи потрібні письменники?',
    tag: 'ТЕХНОЛОГІЇ',
    color: '#7c40ff',
    description: 'MyStory-AI - це новий стартап, який дає змогу створювати дитячі казки за допомогою штучного інтелекту.',
    date: '23.04.2023',
    image: 'events/Sleep.jpg',
}, {
    title: '10.000$ на стартапи',
    tag: 'ІНВЕСТИЦІЇ',
    color: '#ff5940',
    description: 'Разом з вами ми змогли загалом зібрати понад 10.000$ на стартапи підлітків.',
    date: '17.02.2023',
    image: 'events/Donation.jpg',
}];

const Events = () => {
    const cards = EventList.map(item => (
        <EventCard title={item.title}
                   description={item.description}
                   image={item.image}
                   tag={item.tag}
                   tagColor={item.color}
                   date={item.date}/>
    ));
    return (
    <section className="startap">
        <div className="startap-container">
            <p className="startap-headline">
                Події
            </p>
            <CardBlock>
                {cards}
            </CardBlock>
            <div style={{ marginBottom: '100px'}}/>
        </div>
      </section>
    );
}

export default Events