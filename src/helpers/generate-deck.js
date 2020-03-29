import { shuffleArray } from './array'

export default (ingredients, shuffle = true) => {
  let pack = []

  ingredients.forEach((ingredient) => {

    const { color, quantity } = ingredient

    switch (ingredient.type) {

      case 'wild':
      for (let i = 0; i < quantity; i++) {
        pack.push({
          type: 'wild',
          value: 0
        })
      }
      break;

      case 'wilddraw':
      for (let i = 0; i < quantity; i++) {
        pack.push({
          type: 'wilddraw',
          value: 4
        })
      }
      break;

      case '1-9set':
      for (let i = 0; i < quantity; i++) {
        for (let cardI = 1; cardI < 10; cardI++) {
          pack.push({
            type: 'standard',
            color: color,
            value: cardI
          })
        }
      }
      break;

      default:
      break;
    }
  })

  if (shuffle) {
    pack = shuffleArray(pack)
  }

  return pack
}
