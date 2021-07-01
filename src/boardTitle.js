class BoardTitle {
  constructor({container}) {
    this.render(container);
  }

  render($container) {
    const title = document.createElement('h1');
    title.classList.add('game__title');
    title.innerText = 'TIC TAC TOE';

    $container.appendChild(title);
  }
}

export default BoardTitle;
