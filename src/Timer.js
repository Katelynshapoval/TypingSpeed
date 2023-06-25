import { useEffect, useState } from "react";

function Timer({ time }) {
  return (
    <div className="timer">
      <p>{time}</p>
    </div>
  );
}

export default Timer;
