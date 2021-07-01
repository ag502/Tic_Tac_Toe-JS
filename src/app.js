import Board from './board.js';
import ScoreBoard from './scoreBoard.js';
import GameController from './gameController.js';
import BoardTitle from './boardTitle.js';
import {players, calculateWinner} from '../util.js';

const initState = {
  curTurn: players.PLAYER_1,
  board: new Array(9).fill('empty'),
  score: {[players.PLAYER_1]: 0, [players.PLAYER_2]: 0},
  isFinished: false,
};

class App {
  constructor($container) {
    this.$container = $container;
    this.state = {...initState};
    this.render();
  }

  setState = (newState) => {
    this.state = {...this.state, ...newState};
    this.render();
  };

  handleCellClick = (e) => {
    const curIdx = Number(e.target.classList[1].split('--')[1]);
    if (this.state.board[curIdx] !== 'empty') {
      return;
    }

    if (this.state.isFinished) {
      return;
    }

    const updateBoard = [...this.state.board];
    if (this.state.curTurn === players.PLAYER_1) {
      updateBoard[curIdx] = 'X';
      this.setState({
        ...this.state,
        board: updateBoard,
        curTurn: players.PLAYER_2,
      });
    } else {
      updateBoard[curIdx] = 'O';
      this.setState({
        ...this.state,
        board: updateBoard,
        curTurn: players.PLAYER_1,
      });
    }
    const winner = calculateWinner(this.state.board);
    if (winner) {
      const curScoreState = {...this.state.score};
      curScoreState[winner] += 1;
      this.setState({
        ...this.state,
        score: {...curScoreState},
        isFinished: true,
      });
    }
  };

  handleNewGameClick = () => {
    this.setState({
      ...initState,
    });
  };

  handleResetGameClick = () => {
    this.setState({
      board: [...initState.board],
      curTurn: players.PLAYER_1,
      isFinished: false,
    });
  };

  render() {
    this.$container.innerHTML = '';

    const $pageContainer = document.createElement('div');
    $pageContainer.classList.add('page__container');

    const $boardGameContainer = document.createElement('div');
    $boardGameContainer.classList.add('board-game__container');

    new BoardTitle({container: $pageContainer});

    new ScoreBoard({
      container: $boardGameContainer,
      scoreStatus: this.state.score,
      curTurn: this.state.curTurn,
    });
    new Board({
      container: $boardGameContainer,
      board: this.state.board,
      onClick: this.handleCellClick,
    });
    new GameController({
      container: $boardGameContainer,
      onNewGame: this.handleNewGameClick,
      onReset: this.handleResetGameClick,
    });
    $pageContainer.appendChild($boardGameContainer);
    this.$container.appendChild($pageContainer);
  }
}

export default App;
