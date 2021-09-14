export default function play(computer, player) {
  if (computer === player) return 'empate'
  if (computer >= player % 2) return 'computer wins'
  return 'player wins'
}
