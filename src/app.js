import Board from "./board.js"
import {players} from "../util.js"

class App {
  constructor($container) {
    this.$container = $container
    this.curTurn = players.PLAYER_1

    this.render()
  }

  handleCellClick = (e) => {
  }

  render() {
    new Board({container: this.$container, onClick: this.handleCellClick})
  }

}

export default App