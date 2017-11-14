import React, { Component } from 'react'
import './App.css'

class Square extends Component {
  render () {
    return (
      <div className='game-square'>X</div>
    )
  }
}

class Board extends Component {
  render () {
    return (
      <div className='game-board'>
        <Square key='0' />
        <Square key='1' />
        <Square key='2' />
        <Square key='3' />
        <Square key='4' />
        <Square key='5' />
        <Square key='6' />
        <Square key='7' />
        <Square key='8' />
      </div>
    )
  }
}

class Game extends Component {
  render () {
    return (
      <div className='game'>
        <h1 className='game-title'>Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }
}

export default Game
