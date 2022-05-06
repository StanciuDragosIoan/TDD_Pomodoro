import "./App.css";
import { Countdown } from "./components/Countdown";
import { BaseButton } from "./components/BaseButton";
import { CustomTime } from "./components/CustomTime";
import { ProgressBar } from "./components/ProgressBar";
import { useState, useRef, useEffect } from "react";
function App() {
  const [time, setTime] = useState(2000);
  const [tempTime, setTempTime] = useState(0);
  const intervalId = useRef();
  const [isTimeRunning, setRunningTime] = useState(false);
  const [customMins, setCustomMins] = useState(1);
  const [percentageSplit, setPercentageSplit] = useState(time / 100);
  //time variable event listener
  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalId.current);
    }
  }, [time]);

  const startTimer = () => {
    setRunningTime(true);
    if (tempTime > 0) {
      setTime(tempTime);
      setTempTime(0);
    }

    intervalId.current = setInterval(() => {
      setTime((time) => {
        if (time >= 0) {
          setTime(time - 1000);
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  };
  const stopTimer = () => {
    setRunningTime(false);
    setTempTime(time);
    setTime(0);
  };

  //stop timer if time ran out
  useEffect(() => {
    if (time === 0 && tempTime === 0) {
      //default 10 mins
      setTime(0);
      setRunningTime(false);
      setTime(600000);
      setPercentageSplit(600000 / 100);
    }
  }, [tempTime, time]);

  const configureTimer = (mins) => {
    setTime(mins * 60000);
    setTimeout(() => {
      setPercentageSplit((mins * 60000) / 100);
    }, 1);
  };
  return (
    <div className="container p-5 bg-primary card">
      <p className="text-light text-center h1">Pomodoro App</p>
      <Countdown time={time > 0 ? time : tempTime} />
      {isTimeRunning && (
        <>
          {" "}
          <BaseButton btnText="stop" handler={stopTimer} />
          <ProgressBar
            time={time}
            tempTime={tempTime}
            percentageSplit={percentageSplit}
          />
        </>
      )}
      {!isTimeRunning && <BaseButton btnText="start" handler={startTimer} />}
      <CustomTime
        setCustomMins={setCustomMins}
        configureTimer={configureTimer}
        customMins={customMins}
      />
    </div>
  );
}

export default App;
