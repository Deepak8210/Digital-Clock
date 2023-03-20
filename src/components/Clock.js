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
      <h2>Digital Clock</h2>
      <div className="clock-time">
        <div>
          <span className="clocky hour">
            <h1>{hour}</h1>
          </span>
          <span className="title">Hour</span>
        </div>
        <div>
          <span className="clocky hour">
            <h1>{minute}</h1>
          </span>
          <span className="title">Minutes</span>
        </div>
        <div>
          <span className="clocky hour">
            <h1>{second}</h1>
          </span>
          <span className="title">Seconds</span>
        </div>

        <span className="am-pm">
          <h1>{ampm}</h1>
        </span>
      </div>
      <div className="date">
        <span>
          <h2>{currentTime.toLocaleString("en-US", { day: "2-digit" })}</h2>
        </span>
        <span>
          <h2>{currentTime.toLocaleString("en-US", { month: "long" })}</h2>
        </span>
        <span>
          <h2>{currentTime.getFullYear()}</h2>
        </span>
      </div>
    </div>
  );
};

export default Clock;
