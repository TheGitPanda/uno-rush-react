import React from 'react'
import './App.scss'
import './Base.scss'
import QuadrantZone from './components/QuadrantZone/QuadrantZone'
import DebugPanel from './components/DebugPanel/DebugPanel'
import gameSettings from './gameSettings'
import generateDeck from './helpers/generate-deck'
import { onEvent } from './helpers/events'

export default function App() {

  onEvent('Card/clicked', (id) => {
    console.log(`a card was clicked called ${id}`)
  })

  return (
    <>
    <QuadrantZone name="Bradley" position="1" />
    <QuadrantZone name="Bradley" position="2" />
    <QuadrantZone name="Bradley" position="3" />
    <QuadrantZone name="Bradley" position="4" />

    <DebugPanel content={ JSON.stringify( generateDeck(gameSettings.deck.ingredients) , null, 2) } />
    </>
  )
}
