export default function Plays({ image, setPlayerPlay, play }) {
  return (
    <img
      src={image}
      alt=''
      onClick={() => setPlayerPlay(play)}
      style={{
        padding: 15,
        borderRadius: 60,
        backgroundColor: 'white',
        borderWidth: '20px',
        borderColor: 'red',
      }}
    />
  )
}
