import { ACTIONS, RESULTS, getCPUAction, getActionLabel, isWinner } from "../game";

it("Test isWinner", () => {
  const rockPaper = isWinner(ACTIONS.ROCK, ACTIONS.PAPER);
  expect(rockPaper).toBe(RESULTS.LOSE);

  const rockScissors = isWinner(ACTIONS.ROCK, ACTIONS.SCISSORS);
  expect(rockScissors).toBe(RESULTS.WIN);

  const rockRock = isWinner(ACTIONS.ROCK, ACTIONS.ROCK);
  expect(rockRock).toBe(RESULTS.DRAW);

  const paperRock = isWinner(ACTIONS.PAPER, ACTIONS.ROCK);
  expect(paperRock).toBe(RESULTS.WIN);

  const paperScissors = isWinner(ACTIONS.PAPER, ACTIONS.SCISSORS);
  expect(paperScissors).toBe(RESULTS.LOSE);

  const paperPaper = isWinner(ACTIONS.PAPER, ACTIONS.PAPER);
  expect(paperPaper).toBe(RESULTS.DRAW);

  const scissorsRock = isWinner(ACTIONS.SCISSORS, ACTIONS.ROCK);
  expect(scissorsRock).toBe(RESULTS.LOSE);

  const scissorsPaper = isWinner(ACTIONS.SCISSORS, ACTIONS.PAPER);
  expect(scissorsPaper).toBe(RESULTS.WIN);

  const scissorsScissors = isWinner(ACTIONS.SCISSORS, ACTIONS.SCISSORS);
  expect(scissorsScissors).toBe(RESULTS.DRAW);
});

it("Test cpuAction", () => {
  const cpuAction = getCPUAction();
  expect(ACTIONS[cpuAction]).not.toBeUndefined()
})

it("Test getActionLabel", () => {
  expect(getActionLabel(ACTIONS.ROCK)).toBe('rock');
  expect(getActionLabel(ACTIONS.PAPER)).not.toBe("rock");
})
