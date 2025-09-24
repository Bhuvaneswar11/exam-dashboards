import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#08b70dff","#0689f5ff","#ff9800","#820c03ff","#9004a8ff"];

function ScoreDistribution({ data }) {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="count"
        nameKey="range"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default ScoreDistribution;