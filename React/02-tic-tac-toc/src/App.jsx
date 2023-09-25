import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const selected = isSelected ? 'square selected' : 'square'

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={selected} onClick={handleClick}>
      {children}
    </div>
  )
}

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turns, setTurns] = useState(TURNS.X)

  const updateBoard = (index) => {
    if (board[index]) return
    const newBoard = [...board]
    newBoard[index] = turns
    console.log(newBoard);
    setBoard(newBoard)
    const newTurn = turns == TURNS.X ? TURNS.O : TURNS.X
    setTurns(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                updateBoard={updateBoard}
                index={index}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turns == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turns == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
