export const players = {
  PLAYER_1: 'PLAYER_1',
  PLAYER_2: 'PLAYER_2',
};

export const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log(board);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      board[a] !== 'empty' &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      if (board[a] === 'X') {
        return players.PLAYER_1;
      } else if (board[a] === 'O') {
        return players.PLAYER_2;
      }
    }
  }
  return null;
};
