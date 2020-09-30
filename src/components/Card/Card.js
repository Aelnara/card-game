import React, { useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'
import { EnemyContext } from 'contexts/EnemyContext'
import { PlayerContext } from 'contexts/PlayerContext'
import clsx from 'clsx'
import CardStyles from './CardStyles'
import strike from 'assets/images/strike.png'
import defend from 'assets/images/defend.png'

export default function Card({ card, first, secondFirst, middle, secondLast, last }) {
   const classes = CardStyles()
   const { cardPlayed } = useContext(CardsContext)
   const { changeEnemyHealth } = useContext(EnemyContext)
   const { changePlayerBlock } = useContext(PlayerContext)
   
   const playCard = () => {
      if(card.type === 'Attack') {
         changeEnemyHealth(-card.value)
      }
      
      if(card.type === 'Skill') {
         changePlayerBlock(card.value)
      }
      
      cardPlayed(card)
   }
   
   return (
      <div onClick={playCard} className={clsx(classes.Card, {[classes.firstCard]: first, [classes.lastCard]: last, [classes.secondFirstCard]: secondFirst, [classes.secondLastCard]: secondLast, [classes.middleCard]: middle})}>
         <h1>{card.name}</h1>
         <div className={classes.imgContainer}>
            <img src={card.type === 'Attack' ? strike : defend} alt=''/>
         </div>
         <h4>{card.type}</h4>
         <div className={classes.cardBody}>
            <p>{card.text}</p>
         </div>
      </div>
   )
}