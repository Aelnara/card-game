import cardTypes from './cardTypes'
import { v4 as uuidv4 } from 'uuid'

export const getBasicDeck = (attack = 5, defend = 5) => {
   const deck = []
   //putting 'attack' amount (default 5) of attack cards in the deck 
   for(let i = 0; i < attack; i++){
      deck.push({...cardTypes.attack, id: uuidv4()})
   }
   //putting 'defend' amount (default 5) of defend cards in the deck 
   for(let i = 0; i < defend; i++){
      deck.push({...cardTypes.defend, id: uuidv4()})
   }
   //shuffling them with the Durstenfeld shuffle method
   
   return shuffleArray(deck)
}

export const shuffleArray = (array) => {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array
}