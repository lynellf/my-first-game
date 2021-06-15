import { useGameState } from '@/GameState/useGameState'

/**
 * 
 * @param {(string) => void} sendEvent event dispatch
 * @returns {() => void} event handler
 */
function getRestartHandler(sendEvent) {
  return () => sendEvent('events/goHome')
}

/**
 * 
 * @param {(string) => void} sendEvent event dispatch
 * @returns {() => void} event handler
 */
function getContinueHandler(sendEvent) {
  return () => sendEvent('events/startGame')
}

export default function GameOver() {
  const [_state, sendEvent] = useGameState()
  const handleContinue = getContinueHandler(sendEvent)
  const handleRestart = getRestartHandler(sendEvent)

  return (
    <div>
      <h1>Game Over...</h1>
      <button onClick={handleContinue}>Continue</button>
      <button onClick={handleRestart}>Quit</button>
    </div>
  )
}
