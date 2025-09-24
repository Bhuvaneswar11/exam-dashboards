import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function SubjectChart({ data }) {
  const chartData = Object.keys(data).map((subj) => ({
    name: subj,
    score: data[subj],
  }));

  return (
    <BarChart width={500} height={250} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <Bar dataKey="score" fill="#0675f4ff" />
    </BarChart>
  );
}

export default SubjectChart;
