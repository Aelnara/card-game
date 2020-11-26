import React from 'react'
import { CardsProvider } from 'contexts/CardsContext'
import { EnemyProvider } from 'contexts/EnemyContext'
import { PlayerProvider } from 'contexts/PlayerContext'
import { FightProvider } from 'contexts/FightContext'
import Game from 'components/Game/Game'

export default function App() {
   return (
      <CardsProvider>
         <PlayerProvider>
            <EnemyProvider>
               <FightProvider>
                  <Game />
               </FightProvider>
            </EnemyProvider>
         </PlayerProvider>
      </CardsProvider>
   )
}