import React, { useEffect, useState } from 'react';
// import Teste from './assets/icon-paper.svg';
import './App.css';

function getMachineRandomChoice() {
  const allPossibleChoices: typeRockPaperScissors[] = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * (3 - 0) + 0);
  return allPossibleChoices[random];
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={{ width: 130, height: 130, borderRadius: 65, background: "#FFFFFF" }}
      {...props}
    >
      {props.children}
    </button>
  )
}

const rockPaperScissorsRules = {
  rock: {
    rock: 0,
    paper: -1,
    scissors: 1,
  },
  paper: {
    rock: 1,
    paper: 0,
    scissors: -1,
  },
  scissors: {
    rock: -1,
    paper: 1,
    scissors: 0,
  }
}

type typeRockPaperScissors = 'rock' | 'paper' | 'scissors' | undefined;

function rockPaperScissorsWinner(player1: typeRockPaperScissors, player2: typeRockPaperScissors) {
  if (!player1 || !player2) {
    return 0;
  }
  return rockPaperScissorsRules[player1][player2];
}

function App() {
  const [machineChoice, setMachineChoice] = useState<typeRockPaperScissors>();
  const [userChoice, setUserChoice] = useState<typeRockPaperScissors>();
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState('');

  function calculateWinner(choice: typeRockPaperScissors) {
    const RoundMachineChoice = getMachineRandomChoice();
    const roundScore = rockPaperScissorsWinner(choice, RoundMachineChoice);

    setMachineChoice(RoundMachineChoice);
    setUserChoice(choice);

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
    <div className="App">
      <div style={{ color: "#34495E", fontWeight: 700, background: "#ECF0F1", border: "2px solid #BDC3C7", borderRadius: 8, padding: "15px 36px 5px 37px", marginBottom: 110 }}>
        <p>SCORE</p>
        <p>{score}</p>
      </div>
      {/* <Teste /> */}
      
      {!userChoice ? (
        <>
          <Button onClick={() => calculateWinner('rock')}>rock</Button>
          <Button onClick={() => calculateWinner('paper')}>paper</Button>
          <Button onClick={() => calculateWinner('scissors')}>scissors</Button>
        </>
      ) : (
        <>
          <Button>{userChoice?.toLocaleUpperCase()}</Button>
          <Button>{machineChoice?.toLocaleUpperCase()}</Button>
          <div style={{ marginTop: 53, marginBottom: 31 }}>
            MACHINE SELECTED <p>{machineChoice?.toLocaleUpperCase()}</p>
          </div>
          <p style={{ marginBottom: 27 }}>{winner}</p>
          <button style={{ background: "#2980B9" }} onClick={() => setUserChoice(undefined)}>PLAY AGAIN</button>
        </>
      )}
    </div>
  );
}

export default App;
