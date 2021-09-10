export type typeRockPaperScissors = 'rock' | 'paper' | 'scissors' | undefined;

export function getMachineRandomChoice() {
    const allPossibleChoices: typeRockPaperScissors[] = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * (3 - 0) + 0);
    return allPossibleChoices[random];
}

export const rockPaperScissorsRules = {
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
  
export function rockPaperScissorsWinner(player1: typeRockPaperScissors, player2: typeRockPaperScissors) {
    if (!player1 || !player2) {
        return 0;
    }
    return rockPaperScissorsRules[player1][player2];
}
