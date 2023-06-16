import StartupCard from "../components/StartupCard";
import CardBlock from "../components/CardBlock";
import {StartupList} from "../constants/startups"

const Startups = () => {
    const cards = StartupList.map(item => (
        <StartupCard title={item.title.length > 25 ?
            item.title.substring(0, 25) + "..." :
            item.title}
                     author={item.author}
                     image={item.image}/>
    ))
    return (
        <div>
            <CardBlock>
                {cards}
            </CardBlock>
        </div>
    );
}

export default Startups;