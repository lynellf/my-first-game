import { useGameState } from 'game/gameState/useGameState'

/**
 * 
 * @param {(string) => void} sendEvent event dispatch
 * @returns {() => void} event handler
 */
function getStartHandler(sendEvent) {
  return () => sendEvent('events/startGame')
}

export default function TitleScreen() {
  const [_state, sendEvent] = useGameState()
  const handleStart = getStartHandler(sendEvent)

  return (
    <div>
      <h1>This is the title screen.</h1>
      <button onClick={handleStart}>Start Game</button>
    </div>
  )
}
