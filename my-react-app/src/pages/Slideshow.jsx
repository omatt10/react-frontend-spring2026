import {useState} from 'react';
import "../css/Slideshow.css";
import Image from "../components/Image.jsx";

const Slideshow = () => {
    const {slideshow, setSlideIndex} = useState(0);

    const importAll = (resource) => { 
        return resource.keys().map(resource);
    };

    const images= importALL(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg)$/) 
    );

    const slideForward = () => {
        /*if(setSlideIndex == images.length-1) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideshow + 1);
        }
            */

        setSlideIndex(slideInde==images.length-1 ? 0 : slideshow + 1);
    }; 

    
    return (
        <section className="slideshow">
            <img src={images[slideIndex]} />
            <a id="next-arrow" onClick={slideForward} className="arrow" href="#">&rsaquo;</a>
            <a id="prev-arrow" onClick={slideBackward} className="arrow" href="#">&lsaquo;</a>
        </section>
    );

};