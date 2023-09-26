import { useState } from 'react'
import { Modal } from './components/Modal'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants/const'
import { checkWin, chekEngGame } from './logic/check'
import { setLocalStorage } from './logic/localStorage'

const Square = ({ children, isSelected, updateBoard, index, showModal = true }) => {
  const selected = isSelected ? 'square selected' : 'square'
  const show = showModal ? '' : 'hide'

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={`${selected} ${show}`} onClick={handleClick}>
      {children}
    </div>
  )
}

const App = () => {
  const [board, setBoard] = useState(() => {
    const storage = window.localStorage.getItem('board')
    return JSON.parse(storage) ?? Array(9).fill(null)
  })
  const [turns, setTurns] = useState(() => {
    const turn = window.localStorage.getItem('turn')
    return turn ? turn : TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurns(TURNS.X)
    setWinner(null)
    setLocalStorage({ board: Array(9).fill(null), turn: TURNS.X })
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turns
    setBoard(newBoard)
    const newTurn = turns == TURNS.X ? TURNS.O : TURNS.X
    setTurns(newTurn)
    const newWinner = checkWin(newBoard)
    setLocalStorage({ board: newBoard, turn: newTurn })
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (chekEngGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <>
      <main className={winner !== null ? 'board blur' : 'board'}>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset Game</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  updateBoard={updateBoard}
                  index={index}
                >
                  {square}
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
      <section>
        {winner !== null && (<Modal winner={winner}>
          <Square showModal={winner}>
            {winner}
          </Square>
          <button onClick={resetGame}>Restart</button>
        </Modal>)}
      </section>
    </>
  )
}

export default App
