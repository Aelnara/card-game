import React, { useContext } from 'react'
import { PlayerContext } from 'contexts/PlayerContext'
import HealthBar from 'components/HealthBar/HealthBar'
import PlayerStyles from './PlayerStyles'

export default function Player() {
   const classes = PlayerStyles()
   const { player } = useContext(PlayerContext)
   
   return (
      <div className={classes.Player}>
         {player.block > 0 && <div className={classes.blockDisplay}>
            <h1>{player.block}</h1>
         </div>}
         <HealthBar health={player.health} maxHealth={player.maxHealth} blockOverlay={player.block > 0} />
         <h3>{player.name}</h3>
      </div>
   )
}