import React from "react";

/**
 * Increment every second and reset and reset to zero whenever
 * shouldIncrement is false
 * @param {boolean} shouldIncrement only increment when true
 * @returns {boolean} The current timer value
 */
export function useCurrentVisibilityTimer(shouldIncrement) {
  const [timerVal, setTimerVal] = React.useState(0);

  React.useEffect(() => {
    let intervalId;

    if (shouldIncrement) {
      intervalId = setInterval(() => {
        setTimerVal(timerVal + 1);
      }, 1000);
    } else {
      setTimerVal(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [shouldIncrement, timerVal]);

  return timerVal;
}

/**
 * Increment every second
 * @param {boolean} shouldIncrement only increment when true
 * @returns {boolean} The current timer value
 */
export function useTotalVisibilityTimer(shouldIncrement) {
  const [timerVal, setTimerVal] = React.useState(0);

  React.useEffect(() => {
    let intervalId;

    if (shouldIncrement) {
      intervalId = setInterval(() => {
        setTimerVal(timerVal + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [shouldIncrement, timerVal]);

  return timerVal;
}
