import Layout from "./Layout";
import GameInfoContainer from "./GameInfoContainer";
import GameInfoItem from "./GameInfoItem";
import PlayersContainer from "./PlayersContainer";
import Player from "./Player";
import ButtonLabelGroup from "./ButtonLabelGroup";
import ActionButton from "./ActionButton";
import ActionResult from "./ActionResult";
import ActionLabel from "./ActionLabel";
import GameStatusContainer from "./GameStatusContainer";
import ResetButton from "./ResetButton";
import useGameReducer from "../hooks/useGameReducer";
import ActionImage from "./ActionImage";
import { ACTIONS } from "../lib/game";

function App() {
  const [state, rock, paper, scissors, reset] = useGameReducer();
  return (
    <Layout>
      <GameInfoContainer>
        <GameInfoItem amount={state.win}> win</GameInfoItem>
        <GameInfoItem amount={state.lose}> lose</GameInfoItem>
        <GameInfoItem amount={state.draw}> draw</GameInfoItem>
      </GameInfoContainer>
      <PlayersContainer>
        <Player>
          <ActionImage action={state.player}>Ready Player 1</ActionImage>
          <ButtonLabelGroup>
            <ActionButton clickHandler={rock} name="rock">
              Rock
            </ActionButton>
            <ActionButton clickHandler={paper} name="paper">
              Paper
            </ActionButton>
            <ActionButton clickHandler={scissors} name="scissors">
              Scissors
            </ActionButton>
          </ButtonLabelGroup>
        </Player>
        <ActionResult result={state.result} />
        <Player>
          <ActionImage action={state.cpu}>Ready CPU</ActionImage>
          <ButtonLabelGroup>
            <ActionLabel active={state.cpu === ACTIONS.ROCK ? true : false}>
              Rock
            </ActionLabel>
            <ActionLabel active={state.cpu === ACTIONS.PAPER ? true : false}>
              Paper
            </ActionLabel>
            <ActionLabel active={state.cpu === ACTIONS.SCISSORS ? true : false}>
              Scissors
            </ActionLabel>
          </ButtonLabelGroup>
        </Player>
      </PlayersContainer>
      <GameStatusContainer
        player={state.player}
        cpu={state.cpu}
        result={state.result}
      />
      <ResetButton clickHandler={reset}>Reset Session</ResetButton>
    </Layout>
  );
}

export default App;
