import { ACTIONS, RESULTS, getCPUAction, getActionLabel, isWinner } from "../game";

it("Test isWinner", () => {
  const rockPaper = isWinner(ACTIONS.GOOD, ACTIONS.SAD);
  expect(rockPaper).toBe(RESULTS.LOSE);

  const rockScissors = isWinner(ACTIONS.GOOD, ACTIONS.RAD);
  expect(rockScissors).toBe(RESULTS.WIN);

  const rockRock = isWinner(ACTIONS.GOOD, ACTIONS.GOOD);
  expect(rockRock).toBe(RESULTS.DRAW);

  const paperRock = isWinner(ACTIONS.SAD, ACTIONS.GOOD);
  expect(paperRock).toBe(RESULTS.WIN);

  const paperScissors = isWinner(ACTIONS.SAD, ACTIONS.RAD);
  expect(paperScissors).toBe(RESULTS.LOSE);

  const paperPaper = isWinner(ACTIONS.SAD, ACTIONS.SAD);
  expect(paperPaper).toBe(RESULTS.DRAW);

  const scissorsRock = isWinner(ACTIONS.RAD, ACTIONS.GOOD);
  expect(scissorsRock).toBe(RESULTS.LOSE);

  const scissorsPaper = isWinner(ACTIONS.RAD, ACTIONS.SAD);
  expect(scissorsPaper).toBe(RESULTS.WIN);

  const scissorsScissors = isWinner(ACTIONS.RAD, ACTIONS.RAD);
  expect(scissorsScissors).toBe(RESULTS.DRAW);
});

it("Test cpuAction", () => {
  const cpuAction = getCPUAction();
  expect(ACTIONS[cpuAction]).not.toBeUndefined()
})

it("Test getActionLabel", () => {
  expect(getActionLabel(ACTIONS.GOOD)).toBe('good');
  expect(getActionLabel(ACTIONS.SAD)).not.toBe("good");
})
