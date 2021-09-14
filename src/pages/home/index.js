import { Col, Row } from 'reactstrap'
import scissor from '../../assets/images/scissor.png'
import paper from '../../assets/images/paper.png'
import rock from '../../assets/images/rock.png'
import { useEffect, useState } from 'react'
import Plays from '../../components/plays'
import computerPlay from '../../utils/computerPlay'
import play from '../../utils/play'
import { PLAYS } from '../../utils/constants'

export default function Home() {
  const [playerPlay, setPlayerPlay] = useState()
  const [computer, setComputerPlay] = useState()
  const [result, setResult] = useState()

  useEffect(() => {
    // desafiante escolhe uma jogada aleatória
    setComputerPlay(computerPlay())
  }, [playerPlay])

  useEffect(() => {
    setResult(play(computer, playerPlay))
  }, [computer])

  return (
    <div style={{ backgroundColor: '#2C3E50' }}>
      <Row className='score' style={{ backgroundColor: 'white' }}>
        <Row>
          <Col xs={12}>
            <p style={{ justifyContent: 'center' }}>Score</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>quantidade de vezes que o player ganhou</p>
          </Col>
        </Row>
      </Row>
      <div className='play'>
        <Row>
          <Col xs='6'>
            <Plays image={rock} setPlayerPlay={setPlayerPlay} play={0} />
          </Col>
          <Col xs='6'>
            <Plays image={paper} setPlayerPlay={setPlayerPlay} play={1} />
          </Col>
          <Col xs='6'>
            <Plays image={scissor} setPlayerPlay={setPlayerPlay} play={2} />
          </Col>
        </Row>
        {console.log(playerPlay, computer)}
        {result && <p>{result}</p>}
        {computer &&
          `computador selecionou ${PLAYS[computer]} \nplayer selecionou ${PLAYS[playerPlay]}`}
      </div>
    </div>
  )
}
