import React, { useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'
import DeckStyles from './DeckStyles'

export default function Deck() {
   const classes = DeckStyles();
   const { deck } = useContext(CardsContext)
   
   const noCards = deck.length === 0
   
   return (
      <div className={classes.Deck}>
         <div className={classes.numDisplay}>
            <h1>{deck.length > 99 ? '99' : deck.length}</h1>
         </div>
         <div className={classes.cardContainer}>
            {!noCards && deck.map((card, i) => i > 12 ? null : <div key={card.id} style={{ zIndex: i, transform: `skew(10deg, -5deg) translateY(-${i*2}px) translateX(${i*2}px)`}} className={classes.card} />)}
         </div>
      </div>
   )
}