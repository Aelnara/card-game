import React, { createContext, useState, useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'

export const FightContext = createContext()

export function FightProvider(props) {
   const [playerTurn, setPlayerTurn] = useState(true)
   const { discardHand } = useContext(CardsContext)
   
   const switchTurns = () => {
      setPlayerTurn(!playerTurn)
      
      discardHand()
   }
   
   
   return (
      <FightContext.Provider value={{ playerTurn, switchTurns }}>
         {props.children}
      </FightContext.Provider>
   )
}