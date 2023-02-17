import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
// import CatCard from '../catCard/CatCard';
// import { cards } from '../../data';


const Slide = ({children, slidesToShow, arrowScroll}) => {
  return (
    <div  className='slide'>
      <div className="container">
      <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
        {/* {cards.map(card=>(
          <CatCard item={(card)} key={card.id} />
        ))} */}
        {children}
      </Slider>
      </div>
    </div>
  )
}

export default Slide
