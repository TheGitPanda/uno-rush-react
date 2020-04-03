import { onEvent, triggerEvent } from './helpers/event'
import { swapArrayIndexes } from './helpers/array'
import { compareCardValidity } from './helpers/uno'

export default function (app) {

  // Game Logic

  onEvent('GameLogic/next-go', () => {
    app.setState({
      id: app.determineNextGo()
    })
    app.createDeadlineAction(() => {
      triggerEvent('GameLogic/timer-reached-zero')
    }, app.state.game.timeToMakeMove)
  })

  onEvent('GameLogic/timer-reached-zero', () => {
    triggerEvent('GameLogic/force-autoplay-card')

    app.createDeadlineAction(() => {
      triggerEvent('GameLogic/next-go')
    }, .5)
  })

  onEvent('GameLogic/force-autoplay-card', () => {
    const { activePlayerTurn } = app.state
    const activeCardFromPlayer = app.getPlayerActiveCard(activePlayerTurn)
    const activeCardOnPile = app.getActivePileCard()
    if (compareCardValidity(activeCardOnPile, activeCardFromPlayer)) {
      app.throwActiveCardFromPlayerToPile(activePlayerTurn)
    }
  })

  onEvent('GameLogic/card-added-to-pile', (ce) => {
    if (ce.card.type.startsWith('wild')) {
      triggerEvent('GameLogic/requests-flower')
    }
  })

  onEvent('GameLogic/requests-flower', () => {
    app.setState({
      flowerVisible: true
    })
    app.createDeadlineAction(() => {
      console.log(app.state.timer);
      triggerEvent('Flower/selected-color', {
        color: 'red'
      })
    }, 3)
  })

  // Human Interface

  onEvent('HumanInterface/card-ordering-swap', (ce) => {
    const { players } = app.state
    const { playerId, sourceId, targetId } = ce
    players[playerId].cards = swapArrayIndexes(players[playerId].cards, sourceId, targetId)
    app.setState({
      players
    })
  })

  // Flower

  onEvent('Flower/selected-color', (ce) => {
    app.setPileWildColor(ce.color, () => {
      triggerEvent('GameLogic/next-go')
    })
  })
}
