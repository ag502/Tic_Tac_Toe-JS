class Board {
  constructor({container, board, onClick}) {
    this.render(container, board, onClick);
  }

  render($container, board, onClick) {
    $container.innerHTML = '';
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board__container');

    board.forEach((el, idx) => {
      const cell = document.createElement('div');
      cell.classList.add('board__cell');
      cell.classList.add(`${idx}`);

      cell.addEventListener('click', onClick);

      const mark = document.createElement('img');
      mark.classList.add('board__cell__mark');

      if (el === 'X') {
        mark.setAttribute('src', 'assets/x.svg');
        cell.appendChild(mark);
      } else if (el === 'O') {
        mark.setAttribute('src', 'assets/o.svg');
        cell.appendChild(mark);
      }

      boardContainer.appendChild(cell);
    });

    $container.appendChild(boardContainer);
  }
}

export default Board;
