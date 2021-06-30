class Board {
  constructor({container, onClick}) {
    this.render(container, onClick)
  }

  render($container, onClick) {
    const boardContainer = document.createElement("div")
    boardContainer.classList.add("board__container")

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div")
      cell.classList.add("board__cell")
      cell.classList.add(`cell--${i}`)

      cell.addEventListener("click", onClick)

      boardContainer.appendChild(cell)
    }

    $container.appendChild(boardContainer)
  }
}

export default Board