import Layout from "./Layout";
import GlobalStyles from "../styles/GlobalStyles";
import Banner from "./Banner";
import GameInfoContainer from "./GameInfoContainer";
import GameInfoItem from "./GameInfoItem";
import PlayerContainer from "./PlayerContainer";
import Player from "./Player";
import ButtonLabelGroup from "./ButtonLabelGroup";
import ActionButton from "./ActionButton";
import ActionResult from "./ActionResult";
import ActionLabel from "./ActionLabel";
import GameStatusContainer from "./GameStatusContainer";
import Reset from "./Reset";
import useGameReducer from "../hooks/useGameReducer";
import ActionImage from "./ActionImage";
import { ACTIONS } from "../lib/game";

function App() {
  const [state, rock, paper, scissors, reset] = useGameReducer();
  return (
    <Layout>
      <GlobalStyles />
      <Banner />
      <main>
        <GameInfoContainer>
          <GameInfoItem amount={state.win}> win</GameInfoItem>
          <GameInfoItem amount={state.lose}> lose</GameInfoItem>
          <GameInfoItem amount={state.draw}> draw</GameInfoItem>
        </GameInfoContainer>
        <PlayerContainer>
          <Player>
            <ActionImage action={state.player}>Ready Player 1</ActionImage>
            <ButtonLabelGroup>
              <ActionButton onClick={() => rock()}>Rock</ActionButton>
              <ActionButton onClick={() => paper()}>Paper</ActionButton>
              <ActionButton onClick={() => scissors()}>Scissors</ActionButton>
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
              <ActionLabel
                active={state.cpu === ACTIONS.SCISSORS ? true : false}
              >
                Scissors
              </ActionLabel>
            </ButtonLabelGroup>
          </Player>
        </PlayerContainer>
        <GameStatusContainer
          player={state.player}
          cpu={state.cpu}
          result={state.result}
        />
        <Reset onClick={() => reset()} />
      </main>
    </Layout>
  );
}

export default App;
