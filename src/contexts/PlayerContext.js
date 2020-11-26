import React, { createContext, useState } from 'react'

export const PlayerContext = createContext()

export function PlayerProvider(props) {
   const [player, setPlayer] = useState({
      name: 'Player',
      health: 70,
      maxHealth: 70,
      block: 0
   })
   
   const initializePlayer = (name, health) => setPlayer({ name, health });
   
   const changePlayerHealth = value => setPlayer(prevState => {
      const player = {...prevState};
      player.health += value;
      if(player.health < 1){
         player.health = 0
      }
      return player
   })
   
   const changePlayerBlock = value => setPlayer(prevState => {
      const player = {...prevState};
      player.block += value;
      if(player.block < 1){
         player.block = 0
      }
      return player
   })
   
   return (
      <PlayerContext.Provider value={{ player, initializePlayer, changePlayerHealth, changePlayerBlock }}>
         {props.children}
      </PlayerContext.Provider>
   )
}