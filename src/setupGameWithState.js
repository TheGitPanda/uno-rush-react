import generateDeck from './helpers/generate-deck'

export default (settings) => {

  const { players, deck, game } = settings

  return {
    // Cache original settings
    players,
    deck,
    game,
    // State variables for UI, main deck and game logic
    activePlayerTurn: -1,
    masterDeck: generateDeck(deck.ingredients)
  }
}
