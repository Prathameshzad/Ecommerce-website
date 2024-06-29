import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCaruoselData } from './HomeCaruoselData';


const items = HomeCaruoselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image}/>)

const HomeCaruosel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
    />
);

export default HomeCaruosel;