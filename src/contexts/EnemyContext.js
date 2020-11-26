import React, { createContext, useState } from 'react'

export const EnemyContext = createContext()

export function EnemyProvider(props) {
   const [enemy, setEnemy] = useState({
      name: 'Monster',
      health: 50,
      maxHealth: 50,
      attack: 10,
      block: 0
   })
   
   const initializeEnemy = (name, health, attack, block) => setEnemy({ name, health, maxHealth: health, attack, block })
   
   const changeEnemyHealth = value => setEnemy(prevState => {
      const enemy = {...prevState};
      enemy.health += value;
      if(enemy.health < 1){
         enemy.health = 0
      }
      return enemy
   })
   
   return (
      <EnemyContext.Provider value={{ enemy, initializeEnemy, changeEnemyHealth }}>
         {props.children}
      </EnemyContext.Provider>
   )
}