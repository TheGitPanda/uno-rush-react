import generateDeck from './helpers/generate-deck'

export default (settings) => {

  const { players, deck, game } = settings
  
  return {
    activePlayerTurn: 0,
    players,
    game,
    masterDeck: generateDeck(deck.ingredients)
  }
}
