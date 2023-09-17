import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];

const SetlectReset = (props) => {
  const [time, setTime] = useState();
  return (
    <div style={{ display: "flex" }}>
      <select
        onChange={(e) => {
          setTime(e.target.value);
        }}
        className="selectBoxStyle"
      >
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + " sec"}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          props.onClickReset(time);
        }}
        className="buttonStyle"
      >
        Reset
      </button>
    </div>
  );
};

function App() {
  const onClickReset = (newTime) => {
    setTime(newTime);
  };

  const initialTime = 10;
  const [time, setTime] = useState(initialTime);

  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={time}
          isPlaying
          duration={time}
          colors={[["#006400", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          // onComplete={() => {
          //   return { shouldRepeat: true, delay: 1 } // repeat animation in 1 seconds
          // }}

          //The above onComplete works in chrome browser

          onComplete={() => [true, 10]}
        >
          {renderTime}
        </CountdownCircleTimer>

        <SetlectReset onClickReset={onClickReset} />

        <h3>Assiginment is solved by</h3>
        <h2>
          <a
            href="https://www.linkedin.com/in/pradip-bhoskar-218911171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pradip Bhoskar
          </a>
        </h2>
        <h4>
          The reset button resets as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
