import { useState, useRef, useEffect} from 'react'

export default function Slideshow(props) {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () => setIndex((prevIndex) => prevIndex === props.children.length - 1 ? 0 : prevIndex + 1),
          props.delay
        );
        return () => {
            resetTimeout();
        };
    }, [index, props.delay, props.children.length]);
    
    return (
        <div className="slideshow">
          <div className="slideshow-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {props.children.map((image, index) => (
              <div className="slide" key={index}>
                {image}
              </div>
            ))}
          </div>
        </div>
      );

}