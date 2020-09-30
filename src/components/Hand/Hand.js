import React, { useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'
import Card from 'components/Card/Card'
import HandStyles from './HandStyles'

export default function Hand() {
   const classes = HandStyles()
   const { hand } = useContext(CardsContext)
   
   return (
      <div className={classes.Hand}>
         {hand.map((card, i) => (
            <Card 
               key={card.id} 
               card={card} 
               first={i === 0 && hand.length !== 1} 
               secondFirst={i === 1 && hand.length > 3}
               middle={i === 1 && hand.length === 3}
               secondLast={i === hand.length - 2 && hand.length > 3}
               last={i === hand.length - 1 && hand.length !== 1} 
            />
         ))}
      </div>
   )
}