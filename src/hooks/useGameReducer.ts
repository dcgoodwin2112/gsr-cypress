import { useReducer } from "react";
import { ACTIONS, RESULTS, getCPUAction, isWinner } from "../lib/game";

const initialState = {
  win: 0,
  lose: 0,
  draw: 0,
  rock: 0,
  paper: 0,
  scissors: 0,
  result: RESULTS.INIT,
  player: ACTIONS.RESET,
  cpu: ACTIONS.RESET,
};

function reducer(state: typeof initialState, action: ACTIONS) {
  if (action === ACTIONS.RESET) {
    return initialState;
  } else if (ACTIONS[action] !== typeof "undefined") {
    const cpuAction = getCPUAction();
    const result = isWinner(action, cpuAction);
    const win = result === RESULTS.WIN ? state.win + 1 : state.win;
    const lose = result === RESULTS.LOSE ? state.lose + 1 : state.lose;
    const draw = result === RESULTS.DRAW ? state.draw + 1 : state.draw;
    const rock = action === ACTIONS.ROCK ? state.rock + 1 : state.rock;
    const paper = action === ACTIONS.PAPER ? state.paper + 1 : state.paper;
    const scissors =
      action === ACTIONS.SCISSORS ? state.scissors + 1 : state.scissors;
    return {
      win,
      lose,
      draw,
      rock,
      paper,
      scissors,
      result,
      player: action,
      cpu: cpuAction,
    };
  } else {
    throw new Error("Invalid game state reached");
  }
}

export default function useGameReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rock = () => {
    dispatch(ACTIONS.ROCK);
  };

  const paper = () => {
    dispatch(ACTIONS.PAPER);
  };

  const scissors = () => {
    dispatch(ACTIONS.SCISSORS);
  };

  const reset = () => {
    dispatch(ACTIONS.RESET);
  };

  return [state, rock, paper, scissors, reset] as const;
}
