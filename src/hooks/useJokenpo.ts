import { useEffect, useState } from 'react'

export default () => {
  const [active, setActive] = useState<string>('start')
  const [score, setScore] = useState<number>(0)
  const [status, setStatus] = useState<string>()
  const [player, setPlayer] = useState<number>(0)
  const [computer, setComputer] = useState<number>(0)

  const handleResult = (computer: number) => {
    if (computer === player) {
      setStatus('DRAW')
      return 'DRAW'
    }
    if ((computer === 0 && player === 2) || (computer === 1 && player === 0) || (computer === 2 && player === 1)) {
      setStatus('YOU LOOSE')
      setScore(prev => prev - 1)
      return 'YOU LOOSE'
    }
    setStatus('YOU WIN')
    setScore(prev => prev + 1)
    return 'YOU WIN'
  }

  useEffect(() => {
    if (active === 'loading')
      setTimeout(() => {
        const computerMove = Math.floor(Math.random() * 3)
        setActive('end game')
        setComputer(computerMove)
        handleResult(computerMove)
      }, 1000)
  }, [active])

  const play = (move: number) => {
    setActive('loading')
    setPlayer(move)
  }

  const playAgain = () => {
    setActive('start')
  }

  return { play, playAgain, score, status, active, computer, player }
}
