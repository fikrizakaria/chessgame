import Board from './board/Board';
import React, { Component } from 'react'

const styles={
  height:"100vh",
  display : "flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center"
}

class Game extends Component {
  render() {
    return (
      <div style={styles}>
        <Board/>
      </div>
      
    )
  }
}

export default Game;
