import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function ProgressChart({ previous, current }) {
  const data = [
    { exam: "Mid-Term", score: previous },
    { exam: "Final Term", score: current },
  ];

  return (
    <LineChart width={400} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="exam" />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <Line type="monotone" dataKey="score" stroke="#82ca9d" strokeWidth={3} />
    </LineChart>
  );
}

export default ProgressChart;