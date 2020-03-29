import generateDeck from './generate-deck'

export const settings = {
  players: [
    {
      name: 'Bradley',
      cards: [],
      ai: false
    },
    {
      name: 'Karen',
      cards: [],
      ai: true
    },
    {
      name: 'Brian',
      cards: [],
      ai: true
    },
    {
      name: 'Chump',
      cards: [],
      ai: true
    }
  ],
  game: {
    startingCards: 7,
    timeToMakeMove: 2,
    playDirection: 1 // or -1
  },
  deck: {
    ingredients: [
      {
        type: 'wild',
        quantity: 4
      },
      {
        type: 'wilddraw',
        quantity: 4
      },
      {
        type: '1-9set',
        color: 'red',
        quantity: 1
      },
      {
        type: '1-9set',
        color: 'yellow',
        quantity: 1
      },
      {
        type: '1-9set',
        color: 'green',
        quantity: 1
      },
      {
        type: '1-9set',
        color: 'blue',
        quantity: 1
      }
    ]
  }
}

export default () => {

  const { players, deck, game } = settings

  const newDeck = generateDeck(deck.ingredients)
  const startingCard = newDeck[0]

  return {
    // Cache original settings
    players,
    deck,
    game,
    // State variables for UI, main deck and game logic
    activePlayerTurn: -1,
    masterDeck: newDeck,
    pileDeck: [ startingCard ],
    flowerVisible: false
  }
}
