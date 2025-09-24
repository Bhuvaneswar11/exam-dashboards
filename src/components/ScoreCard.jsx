import React from "react";

function ScoreCard({ title, value, subtext }) {
  return (
    <div className="score-card">
      <h3>{title}</h3>
      <p className="score-value">{value}</p>
      {subtext && <p className="score-subtext">{subtext}</p>}
    </div>
  );
}


export default ScoreCard;
