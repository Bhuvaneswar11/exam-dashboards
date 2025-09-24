import React from "react";
import ScoreDistribution from "../components/ScoreDistribution.jsx";
import SubjectChart from "../components/SubjectChart.jsx";
import { teacherData } from "../data.js";

function TeacherDashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-panel">
        <div className="tile">
          <h4>Overall Class Average</h4>
          <div className="metric">{teacherData.overallAvg}%</div>
          <small>Previous: {teacherData.previousAvg}%</small>
        </div>

        <div className="chart-section">
          <h4>Score Distribution</h4>
          <ScoreDistribution data={teacherData.distribution}/>
        </div>

        <div className="chart-section">
          <h4>Subject Performance</h4>
          <SubjectChart data={teacherData.subjects}/>
        </div>
      </div>

      <div className="dashboard-panel">
        <div className="panel-list">
          <h4>Top Performers</h4>
          {teacherData.topPerformers.map((s,i) => (
            <div key={i}>
              <span>{s.name}</span>
              <span>{s.score}%</span>
            </div>
          ))}
        </div>

        <div className="panel-list">
          <h4>Needs Attention</h4>
          {teacherData.struggling.map((s,i) => (
            <div key={i}>
              <span>{s.name}</span>
              <span>{s.score}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
