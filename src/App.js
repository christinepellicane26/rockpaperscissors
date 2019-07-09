import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor(){
    super()
    this.signs = ["rock", "scissors", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo:  "scissors"
      }
    }

    playGame =()=> {
      //methods go here, adding functionality
      this.setState({
        playerOne: this.signs[Math.floor(Math.random()*3)],
        playerTwo: this.signs[Math.floor(Math.random()*3)],
      
      })
      
      }

      decideWinner =()=> {
        const playerOne = this.state.playerOne
        const playerTwo = this.state.playerTwo
        if (playerOne === playerTwo) {
          return "It's a Tie!"
        }
        
         else if ((playerOne === "rock" && playerTwo ==="scissors")||
         (playerOne === "paper" && playerTwo ==="rock")) {
         
         return "Player Two Wins!"
         } else if (playerOne ==="scissors" && playerTwo ==="paper"){
         
         return "Player Two Wins!"
      }
    }

  render(){
    return (
      <div className="style">
      <div>
    <PlayerCard sign={this.state.playerOne} /> 
    <PlayerCard sign={this.state.playerTwo} />
    </div>
      <div className="winner"> {this.decideWinner()} </div>
      <button type="button" onClick={this.playGame}> Play the Game! </button>
     </div>
    )
  }
  }


export default Game;