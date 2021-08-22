export enum ACTIONS {
  RESET,
  GOOD,
  SAD,
  RAD,
}

export enum RESULTS {
  INIT,
  WIN,
  LOSE,
  DRAW,
}

const BEATS = new Map();
BEATS.set(ACTIONS.GOOD, ACTIONS.RAD);
BEATS.set(ACTIONS.SAD, ACTIONS.GOOD);
BEATS.set(ACTIONS.RAD, ACTIONS.SAD);

export function isWinner(playerAction: ACTIONS, cpuAction: ACTIONS) {
  const actionBeats = BEATS.get(playerAction);
  if (actionBeats === cpuAction) {
    return RESULTS.WIN;
  } else if (playerAction === cpuAction) {
    return RESULTS.DRAW;
  } else {
    return RESULTS.LOSE;
  }
}

export function getCPUAction() {
  // Random number between 1 and 3
  return Math.floor(Math.random() * 3) + 1;
}

export function getActionLabel(action: ACTIONS) {
  return ACTIONS[action].toLowerCase();
}
