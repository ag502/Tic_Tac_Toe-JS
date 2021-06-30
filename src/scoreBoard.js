class ScoreBoard {
  constructor({container, scoreStatus, curTurn}) {
    this.render(container, scoreStatus, curTurn);
  }

  render($container, scoreStatus, curTurn) {
    console.log(scoreStatus);
    const $scoreBoardContainer = document.createElement('div');
    $scoreBoardContainer.classList.add('score-board__container');

    Object.entries(scoreStatus).forEach(([player, score], idx) => {
      const scoreBoard = document.createElement('span');
      scoreBoard.classList.add('score-board__score');
      scoreBoard.classList.add(`${player.toLowerCase()}`);
      scoreBoard.innerText = score.toString();

      if (idx === 1) {
        const bar = document.createElement('img');
        bar.setAttribute('src', 'assets/two-dots.svg');
        $scoreBoardContainer.appendChild(bar);
      }

      if (player === curTurn) {
        scoreBoard.classList.add('active');
      } else {
        scoreBoard.classList.remove('active');
      }

      $scoreBoardContainer.appendChild(scoreBoard);
    });

    $container.appendChild($scoreBoardContainer);
  }
}

export default ScoreBoard;
