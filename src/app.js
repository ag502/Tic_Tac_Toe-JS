import Board from "./board.js"
import {players} from "../util.js"

class App {
  constructor($container) {
    this.$container = $container
    this.curTurn = players.PLAYER_1

    this.state = {
      curTurn: players.PLAYER_1
    }

    this.render()
  }

  setState = (stateKey, newState) => {
    this.state[stateKey] = newState
  }

  handleCellClick = (e) => {
    if (this.state.curTurn === players.PLAYER_1) {
      const x = document.createElement("img")
      x.setAttribute("src", "assets/x.svg")
      e.target.appendChild(x)
      this.setState("curTurn", players.PLAYER_2)
    } else {
      const o = document.createElement("img")
      o.setAttribute("src", "assets/o.svg")
      e.target.appendChild(o)
      this.setState("curTurn", players.PLAYER_1)
    }
  }


  render() {
    new Board({container: this.$container, onClick: this.handleCellClick})
  }

}

export default App