import React from "react";
import ComparisonChart from "../components/ComparisionChart.jsx";
import ProgressChart from "../components/ProgressChart.jsx";
import { studentData } from "../data.js";

function StudentDashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-panel">
        <div className="tile">
          <h4>Overall Score</h4>
          <div className="metric">{studentData.overall}%</div>
          <small>Rank: {studentData.rank}/35</small>
        </div>

        <div className="tile">
          <h4>Progress</h4>
          <div className="metric">{studentData.previous}% → {studentData.overall}%</div>
          <small>Since Mid-Term</small>
        </div>
      </div>

      <div className="dashboard-panel">
        <div className="chart-section">
          <h4>Subject Comparison</h4>
          <ComparisonChart data={studentData.subjects}/>
        </div>

        <div className="chart-section">
          <h4>Progress Chart</h4>
          <ProgressChart previous={studentData.previous} current={studentData.overall}/>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
