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
  const [state, good, sad, rad, reset] = useGameReducer();
  return (
    <Layout>
      <GameInfoContainer>
        <GameInfoItem amount={state.win}>win</GameInfoItem>
        <GameInfoItem amount={state.lose}>lose</GameInfoItem>
        <GameInfoItem amount={state.draw}>draw</GameInfoItem>
      </GameInfoContainer>
      <PlayersContainer>
        <Player>
          <ActionImage action={state.player}>Ready Kitty 1</ActionImage>
          <ButtonLabelGroup>
            <ActionButton clickHandler={good} name="good">
              Good Cat
            </ActionButton>
            <ActionButton clickHandler={sad} name="sad">
              Sad Cat
            </ActionButton>
            <ActionButton clickHandler={rad} name="rad">
              Rad Cat
            </ActionButton>
          </ButtonLabelGroup>
        </Player>
        <ActionResult result={state.result} />
        <Player>
          <ActionImage action={state.cpu}>Ready Cat-puter</ActionImage>
          <ButtonLabelGroup>
            <ActionLabel active={state.cpu === ACTIONS.GOOD ? true : false}>
              Good Cat
            </ActionLabel>
            <ActionLabel active={state.cpu === ACTIONS.SAD ? true : false}>
              Sad Cat
            </ActionLabel>
            <ActionLabel active={state.cpu === ACTIONS.RAD ? true : false}>
              Rad Cat
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
