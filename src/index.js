import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './App'
import registerServiceWorker from './registerServiceWorker'

// Create a better modal for this
const onePlayer = true // window.confirm('Play against the computer?')

const game = onePlayer ? <Game onePlayer='true' /> : <Game onePlayer='false' />

ReactDOM.render(
  game,
  document.getElementById('root')
)
registerServiceWorker()
