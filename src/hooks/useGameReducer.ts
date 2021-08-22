import { useReducer } from "react";
import { ACTIONS, RESULTS, getCPUAction, isWinner } from "../lib/game";

const initialState = {
  win: 0,
  lose: 0,
  draw: 0,
  good: 0,
  sad: 0,
  rad: 0,
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
    return {
      win: result === RESULTS.WIN ? state.win + 1 : state.win,
      lose: result === RESULTS.LOSE ? state.lose + 1 : state.lose,
      draw: result === RESULTS.DRAW ? state.draw + 1 : state.draw,
      good: action === ACTIONS.GOOD ? state.good + 1 : state.good,
      sad: action === ACTIONS.SAD ? state.sad + 1 : state.sad,
      rad:
        action === ACTIONS.RAD ? state.rad + 1 : state.rad,
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

  const good = () => {
    dispatch(ACTIONS.GOOD);
  };

  const sad = () => {
    dispatch(ACTIONS.SAD);
  };

  const rad = () => {
    dispatch(ACTIONS.RAD);
  };

  const reset = () => {
    dispatch(ACTIONS.RESET);
  };

  return [state, good, sad, rad, reset] as const;
}
