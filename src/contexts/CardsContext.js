import React, { useEffect, createContext, useState } from 'react'
import { getBasicDeck, shuffleArray } from 'utils/basicDeck'

export const CardsContext = createContext()

export function CardsProvider(props) {
   const [deck, setDeck] = useState(() => getBasicDeck(5,5))
   const [hand, setHand] = useState([])
   const [discardPile, setDiscardPile] = useState([])
   
   
   useEffect(() => {
      if(deck.length === 0) {
         recycleDeck()
      }
   })

   const getTopFromDeck = () => {
      if(deck.length === 0) return
      
      setHand((prevState) => [...prevState, deck[0]])
      setDeck((prevState) => prevState.slice(1))
   }
   
   const discardCard = (playedCard) => {
      setDiscardPile((prevState) => [...prevState, playedCard])
      
      setHand((prevState) => prevState.filter(card => card.id !== playedCard.id))
   }
   
   const discardHand = () => {
      setDiscardPile((prevState) => [...prevState, ...hand])
      
      setHand([])
   }
   
   const recycleDeck = () => {
      if(discardPile.length === 0) return
      
      setDeck(shuffleArray(discardPile))
      setDiscardPile([])
   }
   
   return (
      <CardsContext.Provider value={{ deck, hand, getTopFromDeck, discardPile, discardCard, discardHand }}>
         {props.children}
      </CardsContext.Provider>
   )
}