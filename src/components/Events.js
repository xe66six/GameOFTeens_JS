import { string } from "prop-types";
import './Events.css'



const Events = (props) => {
    
    return (
<body>
    <section class="section">
        <div class="section-container">
            <div class="section-block">
                <div class="section-block-text">
                    <p class="section-block-text-event">
                        Події
                    </p>
                </div>
                <div class="section-block-cart-events">
                    <div class="section-block-cart-events-text-up">
                        <div class="div-section-block-cart-events-true-text">
                        <p class="section-block-cart-events-true-text">Подія</p>
                        <p class="section-block-cart-events-true-text1">Опис</p>
                    </div>
                </div>
                <div class="section-block-cart-events-text-up">
                    <div class="div-section-block-cart-events-true-text">
                    <p class="section-block-cart-events-true-text">Подія</p>
                    <p class="section-block-cart-events-true-text1">Опис</p>
                </div>
            </div>
                <div class="section-block-cart-events-text-up">
                    <div class="div-section-block-cart-events-true-text">
                    <p class="section-block-cart-events-true-text">Подія</p>
                    <p class="section-block-cart-events-true-text1">Опис</p>
                </div>
            </div>
                </div>
                </div>
            </div>
      </section> 
</body>


    );
}

Events.propTypes = {
    title: string,
    author: string,
    image: string
}

export default Events