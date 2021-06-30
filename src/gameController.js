class GameController {
  constructor({container, onNewGame, onReset}) {
    this.render(container, onNewGame, onReset);
  }

  render($container, onNewGame, onReset) {
    const $controllerContainer = document.createElement('div');
    $controllerContainer.classList.add('controller__container');

    const $newGameBtn = document.createElement('button');
    $newGameBtn.classList.add('controller__new-game-btn');
    $newGameBtn.innerText = 'New Game';
    $newGameBtn.addEventListener('click', onNewGame);

    const $resetGameBtn = document.createElement('button');
    $resetGameBtn.classList.add('controller__reset-game-btn');
    $resetGameBtn.innerText = 'Reset Game';
    $resetGameBtn.addEventListener('click', onReset);

    $controllerContainer.appendChild($newGameBtn);
    $controllerContainer.appendChild($resetGameBtn);

    $container.appendChild($controllerContainer);
  }
}

export default GameController;
