import React from "react";
import { usePageVisibility } from "./utils/visibility";
import {
  useCurrentVisibilityTimer,
  useTotalVisibilityTimer
} from "./utils/timerHooks";
import Info from "./Info";
import Citations from "./Citations";
import "./App.css";

function App() {
  const isVisible = usePageVisibility();

  // Change the title based on page visibility
  if (isVisible) {
    document.title = "Active";
  } else {
    document.title = "Inactive";
  }

  // Custom timers which are affected by the page visibility
  const timerVal = useCurrentVisibilityTimer(isVisible);
  const totalTimeVal = useTotalVisibilityTimer(isVisible);

  return (
    <React.Fragment>
      <Info />
      <h2 className="title">You've looking at this page for</h2>
      <p>
        about <b>{timerVal}</b> seconds non-stop
        <br />
        and <b>{totalTimeVal}</b> seconds in total
      </p>
      <Citations />
    </React.Fragment>
  );
}

export default App;
