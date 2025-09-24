import React from "react";

function StudentList({title,students}){
    return(
        <div className="student-list">
  <h3>{title}</h3>
  <ul>
    {students.map((s,i)=>(
      <li key={i}>
        {s.name} - {s.score}%
      </li>
    ))}
  </ul>
</div>

  );
}
export default StudentList;