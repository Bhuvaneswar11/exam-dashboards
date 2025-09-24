import React from "react";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import "./App.css";
import "./styles/Dashboard.css";


function App() {
  return (
    <div className="App">
      <h1 className="page-heading">Exam Results Dashboard</h1>

      <div className="dashboard-wrapper">
        <div className="dashboard-panel">
          <TeacherDashboard />
        </div>
        <div className="dashboard-panel">
          <StudentDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
