import React, { useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'
import DiscardPileStyles from './DiscardPileStyles'

export default function DiscardPile() {
   const classes = DiscardPileStyles();
   const { discardPile } = useContext(CardsContext)
   
   const noCards = discardPile.length === 0
   
   return (
      <div className={classes.DiscardPile}>
         <div className={classes.numDisplay}>
            <h1>{discardPile.length > 99 ? '99' : discardPile.length}</h1>
         </div>
         <div className={classes.cardContainer}>
            {!noCards && discardPile.map((card, i) => i > 12 ? null : <div key={card.id} style={{ zIndex: i, transform: `skew(-10deg, 5deg) translateY(-${i*2}px) translateX(-${i*2}px)`}} className={classes.card} />)}
         </div>
      </div>
   )
}