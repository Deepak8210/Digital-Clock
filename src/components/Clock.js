import "./Clock.css";
import { useState } from "react";

const Clock = () => {
  let time = new Date();
  const [currentTime, setCurrentTime] = useState(time);

  let hour = currentTime.getHours().toString();
  let minute = currentTime.getMinutes().toString();
  let second = currentTime.getSeconds().toString();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
    if (hour < 10) {
      hour = "0" + hour;
    }
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  const updateTime = () => {
    let time = new Date();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="clock">
      <div className="title">
        <h2>Digital Clock</h2>
      </div>
      <div className="time-stamps">
        <div className="time-stamp">
          <span>
            <h1>{hour}</h1>
          </span>

          <h3>Hour</h3>
        </div>
        <div className="time-stamp">
          <span>
            <h1>{minute}</h1>
          </span>

          <h3>minute</h3>
        </div>
        <div className="time-stamp">
          <span>
            <h1>{second}</h1>
          </span>

          <h3>Seconds</h3>
        </div>

        <div className="time-stamp">
          <h1 className="am-pm">{ampm}</h1>
        </div>
      </div>
      <div className="date">
        <h2>{currentTime.toLocaleString("en-US", { day: "2-digit" })}</h2>
        <h2>{currentTime.toLocaleString("en-US", { month: "long" })}</h2>
        <h2>{currentTime.getFullYear()}</h2>
      </div>
    </div>
  );
};

export default Clock;
