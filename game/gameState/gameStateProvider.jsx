import { createContext, useState } from "react"

/**
 * @param {React.Dispatch<React.SetStateAction<string>>} setState borad dispatch
 * @returns {(event: string) => void} narrow dispatch
 */
 function getEventDispatch(setState) {
  return (event) => setState((prevState) => {
    const possibleStates = {
      titleScreen: {
        'events/startGame': 'game',
        'events/endGame': 'titleScreen',
        'events/goHome': 'titleScreen',
        'events/error': 'error'
      },
      game: {
        'events/startGame': 'game',
        'events/endGame': 'gameOver',
        'events/goHome': 'titleScreen',
        'events/error': 'error'
      },
      gameOver: {
        'events/startGame': 'game',
        'events/endGame': 'gameOver',
        'events/goHome': 'titleScreen',
        'events/error': 'error'
      },
      error: {
        'events/startGame': 'error',
        'events/endGame': 'error',
        'events/goHome': 'titleScreen',
        'events/error': 'error'
      }
    }
    return possibleStates?.[prevState]?.[event] ?? prevState
  })
}

/**
 * @description Determines what screen the player shall see
 * @returns {[string, (event: string) => void]} [state, sendEvent]
 */
function useGameState() {
  // titleScreen / game / gameOver / error
  const [state, setState] = useState('titleScreen')
  const sendEvent = getEventDispatch(setState)

  return [state, sendEvent]
}

export const GAME_STATE_CONTEXT = createContext([
  "titleScreen",
  (_event) => undefined,
])

/**
 * @param {{ children: JSX.Element }} { children }
 * @returns { JSX.Element } with game context
 */
export default function gameStateProvider({ children }) {
  const context = useGameState()
  
  return (
    <GAME_STATE_CONTEXT.Provider value={context}>
      {children}
    </GAME_STATE_CONTEXT.Provider>
  )
}
