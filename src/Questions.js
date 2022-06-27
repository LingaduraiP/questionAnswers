import React from "react";

const Questions = ({ title, info }) => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <div className="qusContainer">
      <div className="qusBtn">
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "-" : "+"}
        </button>
      </div>
      <div className="ans">{showInfo && <p>{info}</p>}</div>
    </div>
  );
};

export default Questions;
