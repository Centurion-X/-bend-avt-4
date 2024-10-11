// imports from react library
import { Fragment, useContext, useEffect } from "react";
// imports from project files
import slide_1 from "../../assets/page_under_construction.png";
import slide_2 from "../../assets/NLm-1.jpeg";
import slide_3 from "../../assets/Lm.jpg";
import slide_4 from "../../assets/NLm-2.jpeg";
import slide_5 from "../../assets/page_under_construction.png";
import styles from "./slider.module.css";
import { SlideContext } from "../../context.jsx";

let direction = new Boolean(true);
export default function Slider()
{
    const { getSlide, setSlide } = useContext(SlideContext);
    const slides =
    [
        <img key="id1" src={slide_1}/>,
        <img key="id2" src={slide_2}/>,
        <img key="id3" src={slide_3}/>,
        <img key="id4" src={slide_4}/>,
        <img key="id5" src={slide_5}/>
    ];
    const textes = ['', 'Клановый сайт (мобильная версия)', 'Самые ранние учебные проекты', 'Клановый сайт (мобильная версия)', ''];
    
    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setSlide( index =>
            {
                direction ? index += 1 : index -= 1;
                return index;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = getSlide + 1;
    const prevSlide = getSlide - 1;
    if (!direction && getSlide <= 0 || direction && getSlide >= slides.length - 1) direction = !direction;

    const html =
    (<Fragment>
        <div className={styles["slider"]}>
            <div className={styles["image-prev"]} key={prevSlide}>
                {slides[prevSlide]}
                <p>{textes[prevSlide]}</p>
            </div>
            <div className={styles["image-active"]} key={getSlide}>
                {slides[getSlide]}
                <p>{textes[getSlide]}</p>
            </div>
            <div className={styles["image-next"]} key={nextSlide}>
                {slides[nextSlide]}
                <p>{textes[nextSlide]}</p>
            </div>
        </div>
    </Fragment>)
    return html;
}