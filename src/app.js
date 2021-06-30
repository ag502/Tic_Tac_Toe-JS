import Board from './board.js';
import {players, calculateWinner} from '../util.js';

class App {
  constructor($container) {
    this.$container = $container;

    this.state = {
      curTurn: players.PLAYER_1,
      board: new Array(9).fill('empty'),
      score: {[players.PLAYER_1]: 0, [players.PLAYER_2]: 0},
    };

    this.render();
  }

  setState = (newState) => {
    this.state = {...this.state, ...newState};
    this.render();
  };

  handleCellClick = (e) => {
    const curIdx = Number(e.target.classList[1]);
    if (this.state.board[curIdx] !== 'empty') {
      return;
    }

    if (this.state.curTurn === players.PLAYER_1) {
      this.state.board[curIdx] = 'X';
      this.setState({
        ...this.state,
        board: [...this.state.board],
        curTurn: players.PLAYER_2,
      });
    } else {
      this.state.board[curIdx] = 'O';
      this.setState({
        ...this.state,
        board: [...this.state.board],
        curTurn: players.PLAYER_1,
      });
    }
    const winner = calculateWinner(this.state.board);
    if (winner) {
      this.state.score[winner] += this.setState({
        ...this.state,
        score: {...this.state.score},
      });
      console.log(winner);
    }
  };

  render() {
    new Board({
      container: this.$container,
      board: this.state.board,
      onClick: this.handleCellClick,
    });
  }
}

export default App;
