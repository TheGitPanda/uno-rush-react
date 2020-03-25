export default {
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
