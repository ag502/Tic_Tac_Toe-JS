class ScoreBoard {
  constructor({container, scoreStatus, curTurn}) {
    this.render(container, scoreStatus, curTurn);
  }

  render($container, scoreStatus, curTurn) {
    console.log(scoreStatus);
    const $scoreBoardContainer = document.createElement('div');
    $scoreBoardContainer.classList.add('score-board__container');

    Object.entries(scoreStatus).forEach(([player, score]) => {
      const scoreBoard = document.createElement('div');
      scoreBoard.innerText = score.toString();

      $scoreBoardContainer.appendChild(scoreBoard);
    });

    $container.appendChild($scoreBoardContainer);
  }
}

export default ScoreBoard;
