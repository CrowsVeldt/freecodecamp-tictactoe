import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './App'
import registerServiceWorker from './registerServiceWorker'

// Create a better modal for this
const isOnePlayer = window.confirm('Play against the computer?')

const game = isOnePlayer ? <Game isOnePlayer='true' /> : <Game isOnePlayer='false' />

ReactDOM.render(
  game,
  document.getElementById('root')
)
registerServiceWorker()
