import React from 'react'
import * as Style from './styles'

interface Props {
  score: number
}
const Score = ({ score }: Props) => {
  return (
    <Style.Container>
      SCORE
      <p>{score}</p>
    </Style.Container>
  )
}

export default Score
