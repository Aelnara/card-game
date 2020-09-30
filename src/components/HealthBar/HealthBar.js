import React from 'react';
import HealthBarStyles from './HealthBarStyles'

export default function HealthBar({ health = 0, maxHealth = 0, blockOverlay = false }) {
   const classes = HealthBarStyles(blockOverlay);

   return (
      <div className={classes.healthContainer}>
         <div className={classes.healthBar} style={{width: `${health / maxHealth * 100}%`}}/>
         <h4>Health: {health} / {maxHealth}</h4>
      </div>
   );
}