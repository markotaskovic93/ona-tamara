import React, { useRef, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import useScreenOrientation from '../hooks/useScreenOrientation';
import anime from "animejs/lib/anime.es.js"
import { useEffect } from 'react';

function Home() {
  // window.document.title = 'React App — Home';
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const orientation = useScreenOrientation()
  const sliderContainerRef = useRef(null)

  const items = [
    {
      color: 'red',
      id: 0
    }, {
      color: 'blue',
      id: 1
    },
    {
      color: 'green',
      id: 2
    }
  ]

  useEffect(() => {
    calcTransitionMovement()
  }, [activeSlideIndex, orientation])

  function calcTransitionMovement() {
    let sliderHeight = 0;
    if (sliderContainerRef.current) {
      sliderHeight = sliderContainerRef.current.clientHeight
    }

    const movement = sliderHeight * activeSlideIndex
    runYTransitionAnimation(movement !== 0 ? -movement : 0)
  }

  function handleClick() {
    // eslint-disable-next-line no-unused-expressions
    items.length - 1 > activeSlideIndex ? 
      setActiveSlideIndex(activeSlideIndex + 1) : null
  }

  function runYTransitionAnimation(movement) {
    anime({
      targets: '.slider-container',
      translateY: movement,
      easing: 'easeInOutQuad'
    });
  }
  
  return (
    <MainLayout>
      <div className={`slider-${orientation}`} onClick={handleClick}>
        <div className='slider-container' ref={sliderContainerRef}>
          { items.map(item => {
            return (
              <div className='slider-item' key={item.id} style={{ backgroundColor: item.color }}>
                
              </div>
            )
          }) }
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
