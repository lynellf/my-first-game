import Game from '@/game/Game'
import GameOver from '@/game/GameOver'
import TitleScreen from '@/game/TitleScreen'
import Err from '@/game/Error'
import { useGameState } from '@/game/gameState/useGameState'

const COMPONENTS = {
  titleScreen: TitleScreen,
  game: Game,
  GameOver: GameOver,
  error: Err
}

export default function App() {
  const [state] = useGameState()
  const Component = COMPONENTS?.[state] ?? COMPONENTS.error
  return <Component/>
}
