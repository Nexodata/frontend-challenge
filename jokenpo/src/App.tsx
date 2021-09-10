import React, { useState } from 'react';
import './App.css';
import { RPSButton } from './components/MainButton';
import { getMachineRandomChoice, rockPaperScissorsWinner, typeRockPaperScissors } from './utils';

function App() {
  const [machineChoice, setMachineChoice] = useState<typeRockPaperScissors>();
  const [userChoice, setUserChoice] = useState<typeRockPaperScissors>();
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState('');

  function calculateWinner(choice: typeRockPaperScissors) {
    setUserChoice(choice);
    const RoundMachineChoice = getMachineRandomChoice();
    const roundScore = rockPaperScissorsWinner(choice, RoundMachineChoice);
    setMachineChoice(RoundMachineChoice);
  
    setScore(e => e + roundScore);
    if (roundScore > 0) {
      setWinner('YOU WIN');
    }
    if (roundScore === 0) {
      setWinner('DRAW');
    }
    if (roundScore < 0) {
      setWinner('YOU LOSE');
    }
  }

  return (
    <div className="App" style={{ fontWeight: 700 }}>
      <div className="ScoreBoard">
        <p>SCORE</p>
        <p>{score}</p>
      </div>
      {!userChoice ? (
        <>
          <RPSButton choice="rock" onClick={() => calculateWinner('rock')}>rock</RPSButton>
          <RPSButton choice="paper" onClick={() => calculateWinner('paper')}>paper</RPSButton>
          <RPSButton choice="scissors" onClick={() => calculateWinner('scissors')}>scissors</RPSButton>
        </>
      ) :
      (
        <>
          <RPSButton choice={userChoice}>{userChoice?.toLocaleUpperCase()}</RPSButton>
          <RPSButton choice={machineChoice}>{machineChoice?.toLocaleUpperCase()}</RPSButton>
          <div style={{ marginTop: 53, marginBottom: 31 }}>
            MACHINE SELECTED <p>{machineChoice?.toLocaleUpperCase()}</p>
          </div>
          <p style={{ marginBottom: 27 }}>{winner}</p>
          <button className="PlayAgainButton" onClick={() => setUserChoice(undefined)}>PLAY AGAIN</button>
        </>
      )}
    </div>
  );
}

export default App;
