import { renderHook, act } from "@testing-library/react-hooks";
import useGameReducer from "../useGameReducer";
import { ACTIONS, RESULTS } from "../../lib/game";

it("Render useGameReducer Hook", () => {
  const { result } = renderHook(() => useGameReducer());
  let {
    current: [state, good, sad, rad, reset],
  } = result;

  // Assert Hook state is expected initial state
  expect(
    state.win +
      state.lose +
      state.draw +
      state.good +
      state.sad +
      state.rad
  ).toBe(0);
  expect(state.result).toBe(RESULTS.INIT);
  expect(state.cpu).toBe(ACTIONS.RESET);

  // Dispatch Actions
  act(() => {
    good();
    sad();
    rad();
  });

  // Destructure values out of rendered hook again
  ({
    current: [state, good, sad, rad, reset],
  } = result);

  // Assert total actions === 3 and ACTIONS and RESULTS are valid
  expect(state.win + state.lose + state.draw).toBe(3);
  expect(state.good + state.sad + state.rad).toBe(3);
  expect(ACTIONS[state.player]).not.toBeUndefined();
  expect(ACTIONS[state.cpu]).not.toBeUndefined();
  expect(RESULTS[state.result]).not.toBeUndefined();

  // Dispatch Reset Action
  act(() => {
    reset();
  });

  // Destructure values out of rendered hook again
  ({
    current: [state, good, sad, rad, reset],
  } = result);

  // Assert Hook state is expected initial state again
  expect(
    state.win +
      state.lose +
      state.draw +
      state.good +
      state.sad +
      state.rad
  ).toBe(0);
  expect(state.result).toBe(RESULTS.INIT);
  expect(state.cpu).toBe(ACTIONS.RESET);
});
