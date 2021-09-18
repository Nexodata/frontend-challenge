import React from 'react'
import * as Style from './styles'
import Score from '../components/Score'
import Button from '../components/Button'
import ButtonControl from '../components/ButtonControl'
import useJokenpo from '../hooks/useJokenpo'

const Jokenpo = () => {
  const { playAgain, play, score, status, active, player, computer } = useJokenpo()

  return (
    <Style.Container>
      <Style.WrapperControl>
        <div className={'score'}>
          <Score score={score} />
        </div>
        {active === 'start' && (
          <>
            <div className={'content'}>
              <ButtonControl range={0} onClick={play} />
              <ButtonControl range={1} onClick={play} />
            </div>
            <div>
              <ButtonControl range={2} onClick={play} />
            </div>
          </>
        )}
        {active === 'loading' && (
          <>
            <div className={'content'}>
              <ButtonControl range={player} disabled />
              <ButtonControl range={3} disabled />
            </div>
            <div className={'loading'}>
              <p>MACHINE IS CHOOSING...</p>
            </div>
          </>
        )}
        {active === 'end game' && (
          <>
            <div className={'content'}>
              <ButtonControl range={player} disabled />
              <ButtonControl range={computer} disabled />
            </div>
            <div className={'loading'}>
              <p>{status}</p>
            </div>
            <Button onClick={playAgain}>PLAY AGAIN</Button>
          </>
        )}
      </Style.WrapperControl>
    </Style.Container>
  )
}

export default Jokenpo
