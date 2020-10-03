import React, { useContext } from 'react'
import { EnemyContext } from 'contexts/EnemyContext'
import HealthBar from 'components/HealthBar/HealthBar'
import EnemyStyles from './EnemyStyles'

export default function Enemy() {
   const classes = EnemyStyles()
   const { enemy } = useContext(EnemyContext)
   
   return (
      <div className={classes.Enemy}>
         {enemy.block > 0 && <div className={classes.blockDisplay}>
            <h1>{enemy.block}</h1>
         </div>}
         <HealthBar health={enemy.health} maxHealth={enemy.maxHealth} blockOverlay={enemy.block > 0} />
         <h3>{enemy.name}</h3>
      </div>
   )
}