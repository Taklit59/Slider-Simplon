import React, {useState} from 'react';
import { useEffect } from 'react';
import './Slider.css';
import { images } from './DataSlider';

function Slider () {

    const [currImg, setCurrImg] = useState(0);
    const [elements] = useState(['element1', 'element2', 'element3', 'element4', 'element5', 'element6']);
    const [disabled, setDisabled] = useState(false);

    const handleNext = () => {
        if (disabled) return;
        setCurrImg(currImg === elements.length - 1 ? 0 : currImg + 1);
        setDisabled(true);
      }
    
      const handlePrev = () => {
        if (disabled) return;
        setCurrImg(currImg === 0 ? elements.length - 1 : currImg - 1);
        setDisabled(true);
      }
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setDisabled(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, [currImg]);

    return(
        <div className='slider'>
            <div 
            className='sliderInner' 
            style={{backgroundImage: `url(${images[currImg].image})`}}
            >
                <div 
                className='left'
                onClick={handlePrev} disabled={disabled}
                >
                    <i class="fa fa-circle-arrow-left"></i>
                </div>
                <div className='center'>
                    <h1>{images[currImg].title}</h1>
                </div>
                <div 
                className='right'
                onClick={handleNext} disabled={disabled}>
                    <i class="fa fa-circle-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Slider;
