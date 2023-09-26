import { COMBOS_TO_WIN } from "../constants/const"

export const checkWin = (cheakBoard) => {
    for (const combo of COMBOS_TO_WIN) {
        const [a, b, c] = combo
        if (
            cheakBoard[a] &&
            cheakBoard[a] == cheakBoard[b] &&
            cheakBoard[a] == cheakBoard[c]
        ) {
            return cheakBoard[a]
        }
    }
    return null
}

export const chekEngGame = (newBoard) => {
    return newBoard.every((cell) => cell != null)
}