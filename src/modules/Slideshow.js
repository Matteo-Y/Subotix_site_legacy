import { useState, useRef, useEffect } from "react"

export default function Slideshow(props) {
    const [slide, setSlide] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setSlide((prevIndex) => prevIndex === props.imageList.length - 1 ? 0 : prevIndex + 1 ),
            props.delay
        );

        return () => {
            resetTimeout();
        };
    }, [slide, props.delay, props.imageList]);

    return <div className="slideshow">
        <div style={{ transform: `translateX(${-slide * 100}%)` }} className="slideshow-reel">
            {props.imageList.map((image, index) => <img className="slide slide-image" key={index} src={image} alt={index}/>)}
        </div>
    </div>
}