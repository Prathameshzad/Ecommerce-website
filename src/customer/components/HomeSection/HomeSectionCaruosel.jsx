import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Button} from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { mens_kurta } from '../../../Data/men/mens_kurta';

const HomeSectionCaruosel = ({data, section_name}) => {

  const [activeIndex, setActiveIndex]= useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 3 },
        1044: { items: 4.4 },
    };

    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);


    const syncActiveIndex = (event) => {
      console.log('Slide changed to:', event.item);
      setActiveIndex(event.item);
    };

    const items = data
    .slice(0,10)
    .map((item)=><HomeSectionCard product={item}/>)

  return (
    <div className='relative px-4 lg:px-8 mx-auto'>
      <h1 className='text-2xl font-extrabold text-grey-900 mx-10'>{section_name}</h1>
    <div className='relative p-5'>
      <AliceCarousel
        items={items}
        // disableButtonsControls
        responsive={responsive}
        disableDotsControls
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
          
    />
{activeIndex!== items.length-4  && <Button onClick={slideNext} variant="container" className='z-50' sx={{position:"absolute", top:"8rem", right:"0rem" ,transform:"translateX(40%) rotate(90deg)"}} aria-label='next'>
    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}></KeyboardArrowLeftIcon>
</Button>}
{activeIndex!== 0 && <Button onClick={slidePrev} variant="container" className='z-50' sx={{position:"absolute", top:"8rem", left:"0rem" ,transform:"translateX(-40%) rotate(-90deg)"}} aria-label='next'>
    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}></KeyboardArrowLeftIcon>
</Button>}
    </div>
    </div>
  )
}

export default HomeSectionCaruosel
