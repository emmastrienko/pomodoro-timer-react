import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const timerStates = Object.freeze({
    running: "Running",
    stopped: "Stopped",
    ended: "Ended",
  });
  // define timer intervals pomodoro and shortbreak as arrays
  const pomodoro = [25 * 60 * 1000];
  const shortBreak = [5 * 60 * 1000];
  // define timers object with object properties pomodoro and shortBreak
  //  each property object should have properties:
  //  type, timeout, timerState, timeLeft, timeLeftDisplay and message
  const timers = {
    pomodoro: {
      type: "pomodoro",
      timeout: pomodoro[0],
      timerState: timerStates.stopped,
      timeLeft: pomodoro[0],
      timeLeftDisplay: "25:00",
      message: "Time to Work!",
    },

    shortBreak: {
      type: "shortBreak",
      timeout: shortBreak[0],
      timerState: timerStates.stopped,
      timeLeft: shortBreak[0],
      timeLeftDisplay: "5:00",
      message: "Time for Break!",
    },
  };

  // Call useState Hook to manage 'currentTimer' state
  const [currentTimer, setCurrentTimer] = React.useState({
    ...timers.pomodoro,
  });

  const formatTime = (time) => {
    const minutes = Math.floor(time / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return `${minutes.toString()}:${seconds.toString().padStart(2, "0")}`;
  };

  // Call useEffect Hook to update currentTimer state as timer interval expires
  React.useEffect(() => {
    let timeId;
    if (currentTimer.timerState === timerStates.running) {
      timeId = setInterval(() => {
        setCurrentTimer((prevTimer) => {
          if (prevTimer.timeLeft <= 0) {
            endTimer();
            return prevTimer;
          }
          const newTimeLeft = prevTimer.timeLeft - 1000;
          return {
            ...prevTimer,
            timeLeft: newTimeLeft,
            timeLeftDisplay: formatTime(newTimeLeft),
          };
        });
      }, 1000);
      return () => clearInterval(timeId);
    }
  }, [timers, timerStates.running]);

  // define startTimer() function to start timer and update currentTimer state
  const startTimer = () => {
    setCurrentTimer((prevTimer) => ({
      ...prevTimer,
      timerState: timerStates.running,
    }));
  };

  // define endTimer() function to end current timer and navigate to next timer
  const endTimer = () => {
    setCurrentTimer((prevTimer) => ({
      ...prevTimer,
      timerState: timerStates.ended,
    }));
    navigateToNextTimer();
  };

  // define navigateToTimer() function to update currentTimer state with given timer
  const navigateToTimer = (timerType) => {
    setCurrentTimer({ ...timers[timerType] });
  };

  // define navigateToNextTimer() function to update currentTimer with next timer state
  const navigateToNextTimer = () => {
    setCurrentTimer({
      ...timers[currentTimer.type === "pomodoro" ? "shortBreak" : "pomodoro"],
    });
  };

  // define stopTimer() function to pause the current timer and update the currentTimer state
  const stopTimer = () => {
    setCurrentTimer((prevTimer) => ({
      ...prevTimer,
      timerState: timerStates.stopped,
    }));
  };

  // DO NOT MODIFY THE BELOW CODE, ELSE THE TEST CASES WILL FAIL
  return (
    <div>
      <header>Pomodoro</header>
      <div className="timer-box">
        <div className="timer-box-tabs">
          <button
            id="btn-pd-timer"
            onClick={navigateToTimer.bind(null, timers.pomodoro.type)}
            className={
              currentTimer.type === timers.pomodoro.type
                ? "btn--tab btn--active"
                : "btn--tab"
            }
          >
            Pomodoro
          </button>
          <button
            id="btn-sb-timer"
            onClick={navigateToTimer.bind(null, timers.shortBreak.type)}
            className={
              currentTimer.type == timers.shortBreak.type
                ? "btn--tab btn--active"
                : "btn--tab"
            }
          >
            Short Break
          </button>
        </div>
        <div id="timer">{currentTimer.timeLeftDisplay}</div>
        <div className="timer-controls">
          {currentTimer.timerState == timerStates.stopped ? (
            <button
              className="btn btn--control"
              onClick={startTimer}
              id="btn-start-timer"
            >
              start
            </button>
          ) : (
            <>
              <button
                className="btn btn--control"
                onClick={stopTimer}
                id="btn-stop-timer"
              >
                stop
              </button>
              <button
                className="btn btn--control"
                onClick={endTimer}
                id="btn-end-timer"
              >
                end
              </button>
            </>
          )}
        </div>
      </div>
      <div className="message-container">
        <div id="message">{currentTimer.message}</div>
      </div>
    </div>
  );
}
export default App;
