import React, { useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'
import { FightContext } from 'contexts/FightContext'
import Hand from 'components/Hand/Hand'
import Deck from 'components/Deck/Deck'
import DiscardPile from 'components/DiscardPile/DiscardPile'
import Enemy from 'components/Enemy/Enemy'
import Player from 'components/Player/Player'
import Button from '@material-ui/core/Button'
import GameStyles from './GameStyles'

export default function Game() {
   const classes = GameStyles();
   const { hand, getTopFromDeck } = useContext(CardsContext)
   const { playerTurn, switchTurns } = useContext(FightContext)
   
   
   return (
      <div className={classes.Game}>
         {playerTurn && hand.length < 5 && <Button variant='contained' onClick={getTopFromDeck} disabled={!playerTurn}>Draw Card</Button>}
         <Button variant='contained' onClick={switchTurns}>End Turn</Button>
         
         <Deck />
         <Hand />
         <DiscardPile />
         
         <Player />
         <Enemy />
      </div>
   )
}