import { useContext } from 'react'
import { GAME_STATE_CONTEXT } from '@/GameState/gameStateProvider'

/**
 * @description Determines what screen the player shall see
 * @returns {[string, (event: string) => void]} [state, sendEvent]
 */
export function useGameState() {
  // titleScreen / game / gameOver / error
  const [state, sendEvent] = useContext(GAME_STATE_CONTEXT)
  return [state, sendEvent]
}