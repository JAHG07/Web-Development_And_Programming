const board =
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

var isValidSudoku = function (board) {
  const rows = new Set()
  const columns = new Set()
  const squares = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") continue
      if (rows.has(board[i][j]) ||
        columns.has(board[i][j]) ||
        squares[(Math.floor(i / 3), Math.floor(j / 3))].has(board[i][j])) return false
      rows.add(board[i][j])
      columns.add(board[i][j])
      squares[(Math.floor(i / 3), Math.floor(j / 3))]?.add(board[i][j])
    }
  }
  return true
};

console.log(isValidSudoku(board))