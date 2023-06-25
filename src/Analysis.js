import { useEffect, useState } from "react";

function Analysis({ time, symbols }) {
  return (
    <div className="analysisWrapper">
      <div className="analysis">
        {time}
        <p>Seconds</p>
      </div>
      <div className="analysis">
        {symbols}
        <p>Chars/min</p>
      </div>
    </div>
  );
}

export default Analysis;
