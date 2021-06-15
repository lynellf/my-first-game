import GameStateProvider from '@/game/gameState/gameStateProvider'
import Application from '@/game/Application'
export default function GameContainer() {
  return (
    <GameStateProvider>
      <Application/>
    </GameStateProvider>
  )
}
