import React from 'react'
import CatCard from '../../components/catCard/CatCard'
import { cards } from '../../data'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}> 
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home
