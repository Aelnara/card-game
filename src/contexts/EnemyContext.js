import React, { createContext, useState } from 'react';

export const EnemyContext = createContext();

export function EnemyProvider(props) {
   const [enemy, setEnemy] = useState({
      name: 'Monster',
      health: 50,
      maxHealth: 50,
      block: 0
   });
   
   const initializeEnemy = (name, health, block) => setEnemy({ name, health, maxHealth: health, block });
   
   const changeEnemyHealth = value => setEnemy(prevState => {
      const enemy = {...prevState};
      enemy.health += value;
      if(enemy.health < 1){
         enemy.health = 0
      }
      return enemy
   });
   
   return (
      <EnemyContext.Provider value={{ enemy, initializeEnemy, changeEnemyHealth }}>
         {props.children}
      </EnemyContext.Provider>
   );
}