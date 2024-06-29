import React from 'react'
import HomeCaruosel from '../components/HomeCaruosel/HomeCaruosel.jsx'
import HomeSectionCaruosel from '../components/HomeSection/HomeSectionCaruosel.jsx'
import {mens_kurta} from "../../Data/men/mens_kurta";


const HomePage = () => {
  return (
    <div className='-z-10'>
        <div><HomeCaruosel></HomeCaruosel></div>
        <div><HomeSectionCaruosel data={mens_kurta} section_name={'Mens kurta'}></HomeSectionCaruosel></div>
        <div><HomeSectionCaruosel data={mens_kurta} section_name={'Mens Shoes'}></HomeSectionCaruosel></div>
        <div><HomeSectionCaruosel data={mens_kurta} section_name={'Mens watch'}></HomeSectionCaruosel></div>
    </div>
  )
}

export default HomePage