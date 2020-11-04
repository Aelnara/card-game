import React, { useContext } from 'react'
import { CardsContext } from 'contexts/CardsContext'
import Hand from 'components/Hand/Hand'
import Deck from 'components/Deck/Deck'
import DiscardPile from 'components/DiscardPile/DiscardPile'
import Enemy from 'components/Enemy/Enemy'
import Player from 'components/Player/Player'
import Button from '@material-ui/core/Button'
import GameStyles from './GameStyles'

export default function Game() {
   const classes = GameStyles();
   const { getTopFromDeck } = useContext(CardsContext)
   // const [turns, setTurns] = useState('playerTurn')
   
   return (
      <div className={classes.Game}>
         <Button variant='contained' onClick={getTopFromDeck}>Get Card</Button>
         
         <Deck />
         <Hand />
         <DiscardPile />
         
         <Player />
         <Enemy />
      </div>
   )
}