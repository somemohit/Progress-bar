import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import "./App.css";

export default function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let interval;

    if (percentage < 100) {
      interval = setInterval(() => {
        setPercentage((val) => val + 1);
      }, 50);
    }

    return () => clearInterval(interval);
  }, [percentage]);

  // console.log(percentage, "percentage");

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="progress-bar-container">
        <span
          className="percentage-text"
          style={percentage > 60 ? { color: "white" } : { color: "black" }}
        >
          {percentage}%
        </span>
        <div
          style={{ width: `${percentage}%` }}
          className="progress-tracker"
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
        }}
      >
        {percentage === 100 ? (
          <>
            <p>Completed</p>
            <FaCircleCheck style={{ color: "green", marginLeft: "5px" }} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}